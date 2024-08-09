import React from 'react';
import { AddCircleHalfDotIcon } from 'hugeicons-react';
import { useModals } from '@mantine/modals';
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
  const modals = useModals();
  const metro = arena.MetroStation ? arena.MetroStation.title : 'Нет информации о метро';
  const openDateAddFormModal = () => {
    modals.openModal({
      title: 'Добавить дату события',
      children: <DateAddForm arenaId={arena.id} onClose={() => modals.closeAll()} />,
    });
  };
  const dates = useAppSelector((store) => store.date.date);
  const arenaDates = dates.filter((date) => date.Arenas.map((ar) => ar.id).includes(arena.id));
  const handleDelete = (dateId: DateId): void => {
    dispatch(deleteDate(dateId));
  };

  return (
    <div className="arena-card">
      <div className="arena-card-header">
        <h2 className="arena-title">{arena.title}</h2>
      </div>
      <div className="arena-card-body">
        <p className="arena-description">{arena.description}</p>
        <div className="arena-dates">
          {arenaDates.length > 0 &&
            arenaDates.map((date) => (
              <div key={date.id}>
                <span className="arena-date">
                  {new Date(date.startDate).toLocaleString()} -{' '}
                  {new Date(date.endDate).toLocaleString()}
                </span>
                <button onClick={() => handleDelete(date?.id)}>x</button>
              </div>
            ))}
          <AddCircleHalfDotIcon onClick={openDateAddFormModal} />
        </div>
        <div className="arena-address">
          <span>{`адрес: г. ${arena.city}, ул. ${arena.street}, ${arena.building}`}</span>
        </div>
        <div className="arena-metro">
          <span>{`станция метро: ${metro}`}</span>
        </div>
      </div>
    </div>
  );
}

export default AdminArenasItem;
