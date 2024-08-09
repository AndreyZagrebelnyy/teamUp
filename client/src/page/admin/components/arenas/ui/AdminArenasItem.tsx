import React from 'react';
import { Button } from '@mantine/core';
import { useModals } from '@mantine/modals';
import { notifications } from '@mantine/notifications';
import { AddCircleHalfDotIcon, Delete01Icon } from 'hugeicons-react'; // Обновите иконку для удаления
import { useAppDispatch, useAppSelector } from '../../../../../app/provider/store/store';
import { removeArena } from '../../../../../entities/arena/ArenaSlice';
import DateAddForm from '../../../../../entities/date/ui/DateAddForm';
import type { DateId, DateWithArenas } from '../../../../../entities/date/types/dateType';
import { deleteDate } from '../../../../../entities/date/DateSlice';
import './AdminsArenasItem.css'; // Обновите стили в этом файле

type ArenaItemProps = {
  arena: ArenaWithMetroStation;
  dates: DateWithArenas[];
};

function AdminArenasItem({ arena }: ArenaItemProps): JSX.Element {
  const dispatch = useAppDispatch();
  const modals = useModals();

  const metroTitle = arena.MetroStation?.title || 'Нет информации о метро';
  const openDateAddFormModal = () => {
    modals.openModal({
      title: 'Добавить дату события',
      children: <DateAddForm arenaId={arena.id} onClose={() => modals.closeAll()} />,
    });
  };

  const dates = useAppSelector((store) => store.date.date);
  const arenaDates = dates.filter((date) => date.Arenas.map((ar) => ar.id).includes(arena.id));

  const handleDateDelete = async (dateId: DateId): Promise<void> => {
    try {
      await dispatch(deleteDate(dateId));
      notifications.show({
        title: 'Дата удалена',
        message: 'Дата была успешно удалена.',
        color: 'green',
      });
    } catch (error) {
      notifications.show({
        title: 'Ошибка',
        message: 'Не удалось удалить дату.',
        color: 'red',
      });
      console.error('Ошибка удаления даты:', error);
    }
  };

  const handleArenaDelete = (): void => {
    modals.openConfirmModal({
      title: 'Подтверждение удаления',
      centered: true,
      children: (
        <p>Вы уверены, что хотите удалить эту арену? Это действие невозможно отменить.</p>
      ),
      labels: { confirm: 'Удалить', cancel: 'Отмена' },
      confirmProps: { color: 'red' },
      onConfirm: async () => {
        try {
          await dispatch(removeArena(arena.id));
          notifications.show({
            title: 'Арена удалена',
            message: 'Арена была успешно удалена.',
            color: 'green',
          });
        } catch (error) {
          notifications.show({
            title: 'Ошибка',
            message: 'Не удалось удалить арену.',
            color: 'red',
          });
          console.error('Ошибка удаления арены:', error);
        }
      },
    });
  };

  return (
    <div className="arena-card" key={arena.id}>
      <div className="arena-card-header">
        <h2 className="arena-title">{arena.title}</h2>
        <Button onClick={handleArenaDelete} className="delete-btn">
          Удалить арену
        </Button>
      </div>
      <div className="arena-card-body">
        <p className="arena-description">{arena.description}</p>
        <div className="arena-dates">
          {arenaDates.length > 0 ? (
            arenaDates.map((date) => (
              <div key={date.id} className="date-item">
                <Delete01Icon onClick={() => handleDateDelete(date.id)} className="delete-date-icon" />
                <span className="arena-date">
                  {new Date(date.startDate).toLocaleTimeString()} -{' '}
                  {new Date(date.endDate).toLocaleTimeString()}
                </span>
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
    </div>
  );
}

export default AdminArenasItem;
