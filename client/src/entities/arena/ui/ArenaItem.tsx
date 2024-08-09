// ArenaItem.jsx

import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './ArenaItem.css';
import { Button } from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import { Pagination } from 'swiper/modules';
import type { ArenaWithMetroStation } from '../types/ArenaType';
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
  const [images, setImages] = useState<string[]>([]);
  const events = useAppSelector((store) => store.events.events || []);
  const { user } = useAppSelector((store) => store.auth);
  useEffect(() => {
    if (events && arena.Dates) {
      const busyDates = new Set(
        events.filter((event) => event.arenaId === arena.id).map((event) => event.arenaDateId),
      );
      setAvailableDates(arena.Dates.filter((date) => !busyDates.has(date.id)));
    }
  }, [events, arena.Dates, arena.id]);

  useEffect(() => {
    if (arena.Images) {
      setImages(arena.Images.map((img) => img.url));
    }
  }, [arena.Images]);

  const [isFavourite, setIsFavourite] = useState(
    arena.Users?.some((userFromServer) => user && userFromServer.id === user.id) || false,
  );

  useEffect(() => {
    setIsFavourite(
      arena.Users?.some((userFromObject) => user && userFromObject.id === user.id) || false,
    );
  }, [arena.Users, user]);

  const toggleFavourite = () => {
    if (isFavourite) {
      void dispatch(removeFavourite({ arenaId: arena.id }));
    } else {
      void dispatch(addFavourite({ arenaId: arena.id }));
    }
    setIsFavourite(!isFavourite);
    showNotification({
      title: 'Успех!',
      message: `Вы успешно ${isFavourite ? 'удалили' : 'добавили'} арену из избранного`,
      color: `${isFavourite ? 'red' : 'green'}`,
      className: 'notifications-container',
    });
  };

  const handleDateClick = (dateId: number): void => {
    setSelectedDateId(dateId);
    setModalOpen(true);
  };

  const pagination = {
    clickable: true,
    renderBullet(index, className) {
      return `<span class="${className}">${index + 1}</span>`;
    },
  };

  return (
    <div className="arena-card">
      <EventCreationModal
        arena={arena}
        selectedDateId={selectedDateId}
        setModalOpen={setModalOpen}
        modalOpen={modalOpen}
      />
      {images.length > 0 ? (
        <Swiper pagination={{ clickable: true }} modules={[Pagination]} className="mySwiper">
          {images.map((image, i) => (
            <SwiperSlide key={i}>
              <img src={image} alt={`Изображение ${i + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p>No images available</p>
      )}
      <div className="arena-card-info">
        <h2 className="arena-title">{arena.title}</h2>
      </div>
      <div className="arena-card-body">
        <p className="arena-description">{arena.description}</p>
        <p className="arena-address">
          {arena.country}, {arena.city}, {arena.street} {arena.building}
        </p>
        {arena.MetroStation && (
          <p className="arena-metro">Metro Station: {arena.MetroStation.title}</p>
        )}
        <div className="arena-dates">
          {availableDates.length > 0 ? (
            availableDates.map((date) => (
              <Button key={date.id} onClick={() => handleDateClick(date.id)} className="arena-date">
                {new Date(date.startDate).toLocaleTimeString().split(':').slice(0, -1).join(':')} -{' '}
                {new Date(date.endDate).toLocaleTimeString().split(':').slice(0, -1).join(':')}
              </Button>
            ))
          ) : (
            <p>Нет доступных дат</p>
          )}
        </div>
      </div>
      <div className="arena-card-footer">
        <Button onClick={toggleFavourite} className="arena-favourite-btn">
          {isFavourite ? 'Убрать из избранного' : 'Добавить в избранное'}
        </Button>
      </div>
    </div>
  );
}

export default ArenaItem;
