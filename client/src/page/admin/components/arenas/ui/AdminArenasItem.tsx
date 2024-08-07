import React from 'react';
import { AddCircleHalfDotIcon } from 'hugeicons-react';
import { useModals } from '@mantine/modals';

import type { ArenaWithMetroStation } from '../../../../../entities/arena/types/ArenaType';
import DateAddForm from '../../../../../entities/date/ui/DateAddForm';
import { useAppDispatch } from '../../../../../app/provider/store/store';
import { removeArena } from '../../../../../entities/arena/ArenaSlice';
import './AdminsArenasItem.css';

type ArenaItemProps = {
  arena: ArenaWithMetroStation;
};

function AdminArenasItem({ arena }: ArenaItemProps): JSX.Element {
  const modals = useModals();

  // Ensure arena.MetroStation is defined and has a title property
  const metro = arena.MetroStation ? arena.MetroStation.title : 'Нет информации о метро';
  const dates = Array.isArray(arena.Dates) ? arena.Dates : [];
  const [calendarVisible, setCalendarVisible] = useState(false);
  const dispatch = useAppDispatch();

        
  const openDateAddFormModal = () => {
    modals.openModal({
      title: 'Добавить дату события',
      children: (
        <DateAddForm
          arenaId={arena.id}
          onClose={() => modals.closeAll()} // Закрытие модального окна после добавления
        />
      ),
    });
  };


  const handleDelete = (): void => {
    void dispatch(removeArena(arena.id));
  };

  const metroTitle = arena.MetroStation?.title || 'Нет информации о метро';
  const dates = Array.isArray(arena.Dates) ? arena.Dates : [];


  return (
    <div className="arena-card">
      <div className="arena-card-header">
        <h2 className="arena-title">{arena.title}</h2>
        <button className="delete-button" onClick={handleDelete}>
          Удалить
        </button>
      </div>
      <div className="arena-card-body">
        <p className="arena-description">{arena.description}</p>
        <div className="arena-dates">
          {dates.length > 0 ? (
            dates.map((date) => (
              <span key={date.id} className="arena-date">
                {new Date(date.startDate).toLocaleTimeString()} -{' '}
                {new Date(date.endDate).toLocaleTimeString()}
              </span>
            ))}
          <AddCircleHalfDotIcon onClick={openDateAddFormModal} />
            ))
          ) : (
            <span className="no-dates">Нет доступных дат</span>
          )}
          <AddCircleHalfDotIcon
            onClick={() => setCalendarVisible((prev) => !prev)}
            className="add-date-icon"
          />
        </div>
        <div className="arena-address">
          <span>{`адрес: г. ${arena.city}, ул. ${arena.street}, ${arena.building}`}</span>
        </div>
        <div className="arena-metro">
          <span>{`станция метро: ${metroTitle}`}</span>
        </div>
      </div>
      {calendarVisible && <DateAddForm arenaId={arena.id} />}

    </div>
  );
}

export default AdminArenasItem;
