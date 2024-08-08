import React, { useState, useEffect } from 'react';
import './ArenaItem.css';
import { Button } from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import type { ArenaWithMetroStation } from '../types/ArenaType';
import Carousel from '../../../components/Carousel';
import { useAppDispatch, useAppSelector } from '../../../app/provider/store/store';
import { addFavourite, removeFavourite } from '../../favourite/FavouriteSlice';
import EventCreationModal from '../../event/ui/EventCreationModal';

type ArenaItemProps = {
  arena: ArenaWithMetroStation;
};

function ArenaItem({ arena }: ArenaItemProps): JSX.Element {
  const dispatch = useAppDispatch();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDateId, setSelectedDateId] = useState<number | null>(null);
  const [availableDates, setAvailableDates] = useState(arena.Dates || []);
  const events = useAppSelector((store) => store.events.events || []);

  useEffect(() => {
    if (events && arena.Dates) {
      const busyDates = new Set(
        events.filter((event) => event.arenaId === arena.id).map((event) => event.arenaDateId),
      );
      const filteredDates = arena.Dates.filter((date) => !busyDates.has(date.id));

      setAvailableDates(filteredDates);
    }
  }, [events, arena.Dates, arena.id]);

  const { user } = useAppSelector((store) => store.auth);

  const [isFavourite, setIsFavourite] = useState(
    arena.Users?.some((userFromServer) => user && userFromServer.id === user.id),
  );

  useEffect(() => {
    setIsFavourite(arena.Users?.some((userFromObject) => user && userFromObject.id === user.id));
  }, [arena.Users, user]);

  const toggleFavourite = () => {
    if (isFavourite) {
      void dispatch(removeFavourite({ arenaId: arena.id }));
    } else {
      void dispatch(addFavourite({ arenaId: arena.id }));
    }
    setIsFavourite(!isFavourite);
  };

  const handleDateClick = (dateId: number) => {
    setSelectedDateId(dateId);
    setModalOpen(true);
  };

  return (
    <div className="arena-card">
      <EventCreationModal
        arena={arena}
        selectedDateId={selectedDateId}
        setModalOpen={setModalOpen}
        modalOpen={modalOpen}
      />
      <div className="arena-card-header">
        <h2 className="arena-title">{arena.title}</h2>
      </div>

      <div className="arena-card-body">
        <p className="arena-description">{arena.description}</p>
        <div className="arena-dates">
          {availableDates.length > 0 ? (
            availableDates.map((date) => (
              <span key={date.id} className="arena-date">
                <Button onClick={() => handleDateClick(date.id)}>
                  {new Date(date.startDate).toLocaleTimeString()} -{' '}
                  {new Date(date.endDate).toLocaleTimeString()}
                </Button>
              </span>
            ))
          ) : (
            <p>Нет доступных дат</p>
          )}
        </div>
        <div className="arena-address">
          <span>{`адрес: г. ${arena.city}, ул. ${arena.street}, ${arena.building}`}</span>
        </div>
        <div className="arena-metro">
          <span>{`станция метро: ${arena.MetroStation?.title}`}</span>
        </div>
        <div>
          <Button
            onClick={() => {
              toggleFavourite();
              showNotification({
                title: 'Успех!',
                message: `Вы успешно ${isFavourite ? 'удалили' : 'добавили'} арену из избранного`,
                color: 'green',
                className: 'notifications-container',
              });
            }}
          >
            {isFavourite ? 'Убрать из избранного' : 'Добавить в избранное'}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ArenaItem;
