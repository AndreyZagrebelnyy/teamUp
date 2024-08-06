import React, { useState, useEffect } from 'react';
import './ArenaItem.css';
import { Button } from '@mantine/core';
import type { ArenaWithMetroStation } from '../types/ArenaType';
import Carousel from '../../../components/Carousel';
import { useAppDispatch, useAppSelector } from '../../../app/provider/store/store';
import { addFavourite, removeFavourite } from '../../favourite/FavouriteSlice';
import EventCreationModal from '../../event/ui/EventCreationModal';

const carousels: { [key: number]: string[] } = {
  1: ['/foto/arena1.1.jpg', '/foto/arena1.2.jpg', '/foto/arena1.3.jpg'],
  2: ['/foto/arena2.1.jpg', '/foto/arena2.2.jpg', '/foto/arena2.3.jpg'],
  3: ['/foto/arena3.1.jpg', '/foto/arena3.2.jpg', '/foto/arena3.3.jpg'],
  4: ['/foto/arena4.1.jpg', '/foto/arena4.2.jpg', '/foto/arena4.3.jpg'],
  5: ['/foto/arena5.1.jpg', '/foto/arena5.2.jpg', '/foto/arena5.3.jpg'],
  6: ['/foto/arena6.1.jpg', '/foto/arena6.2.jpg', '/foto/arena6.3.jpg'],
  7: ['/foto/arena6.1.jpg', '/foto/arena6.2.jpg', '/foto/arena6.3.jpg'],
};

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
        events
          .filter((event) => event.arenaId === arena.id)
          .map((event) => event.arenaDateId)
      );
      
      const filteredDates = arena.Dates.filter(
        (date) => !busyDates.has(date.id)
      );
      
      setAvailableDates(filteredDates);
    }
  }, [events, arena.Dates, arena.id]);

  const { user } = useAppSelector((store) => store.auth);

  const [isFavourite, setIsFavourite] = useState(
    arena.Users.some((userFromServer) => user && userFromServer.id === user.id),
  );

  useEffect(() => {
    setIsFavourite(arena.Users.some((userFromObject) => userFromObject.id === user?.id));
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
      <Carousel images={carousels[arena.id]} />
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
          <span>{`станция метро: ${arena.MetroStation.title}`}</span>
        </div>
        <div>
          <button onClick={toggleFavourite}>
            {isFavourite ? 'Убрать из избранного' : 'Добавить в избранное'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ArenaItem;
