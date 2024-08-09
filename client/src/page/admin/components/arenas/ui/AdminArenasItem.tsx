import React, { useState } from 'react';
import { AddCircleHalfDotIcon, Delete01Icon } from 'hugeicons-react'; // Обновите иконку для удаления
import { useModals } from '@mantine/modals';
import { removeArena } from '../../../../../entities/arena/ArenaSlice';
import type { ArenaWithMetroStation } from '../../../../../entities/arena/types/ArenaType';
import DateAddForm from '../../../../../entities/date/ui/DateAddForm';
import './AdminsArenasItem.css';
import { DateId, DateWithArenas } from '../../../../../entities/date/types/dateType';
import { useAppDispatch, useAppSelector } from '../../../../../app/provider/store/store';
import { deleteDate } from '../../../../../entities/date/DateSlice';

type ArenaItemProps = {
  arena: ArenaWithMetroStation;
  dates: DateWithArenas[];
};

function AdminArenasItem({ arena }: ArenaItemProps): JSX.Element {
	const dispatch = useAppDispatch();
  const dates = useAppSelector((store) => store.date.date);
  const modals = useModals();

  const [calendarVisible, setCalendarVisible] = useState(false);
  const metroTitle = arena.MetroStation?.title || 'Нет информации о метро';
  const openDateAddFormModal = () => {
    modals.openModal({
      title: 'Добавить дату события',
      children: <DateAddForm arenaId={arena.id} onClose={() => modals.closeAll()} />,
    });
  };
  const arenaDates = dates.filter((date) => date.Arenas.map((ar) => ar.id).includes(arena.id));
  const handleDateDelete = (dateId: DateId): void => {
    dispatch(deleteDate(dateId));
  };
  const handleArenaDelete = async (): void => {
    if (window.confirm('Вы уверены, что хотите удалить эту арену?')) {
      try {
        await dispatch(removeArena(arena.id));
        alert('Арена успешно удалена');
      } catch (error) {
        alert('Ошибка удаления арены');
        console.error('Ошибка удаления арены:', error);
      }
    }
  };

  return (
    <div className="arena-card" key={arena.id}>
      <div className="arena-card-header">
        <h2 className="arena-title">{arena.title}</h2>
        <button onClick={handleArenaDelete} className="delete-btn">
          Удалить арену
        </button>
      </div>
      <div className="arena-card-body">
        <p className="arena-description">{arena.description}</p>
        <div className="arena-dates">
          {arenaDates.length > 0 ? (
            arenaDates.map((date) => (
              <div>
                <span key={date.id} className="arena-date">
                  {new Date(date.startDate).toLocaleTimeString()} -{' '}
                  {new Date(date.endDate).toLocaleTimeString()}
                </span>
                <Delete01Icon onClick={handleDateDelete} />
              </div>
            ))
          ) : (
            <span className="no-dates">Нет доступных дат</span>
          )}
          <AddCircleHalfDotIcon onClick={openDateAddFormModal} className="add-date-icon" />
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
