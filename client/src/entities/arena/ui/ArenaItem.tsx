import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './ArenaItem.css';

import { Button } from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import type { ArenaWithMetroStation } from '../types/ArenaType';
import Carousel from '../../../components/Carousel';
import { useAppDispatch, useAppSelector } from '../../../app/provider/store/store';
import { addFavourite, removeFavourite } from '../../favourite/FavouriteSlice';
import EventCreationModal from '../../event/ui/EventCreationModal';
import type { ArenaWithMetroStation } from '../types/ArenaType';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

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

  // Обновление доступных дат при изменении событий
  useEffect(() => {
    if (events && arena.Dates) {
      const busyDates = new Set(
        events.filter((event) => event.arenaId === arena.id).map((event) => event.arenaDateId),
      );
      const filteredDates = arena.Dates.filter((date) => !busyDates.has(date.id));
      setAvailableDates(filteredDates);
    }
  }, [events, arena.Dates, arena.id]);

  // Обновление изображений при изменении данных арены

  console.log(1);
  
  useEffect(() => {
    if (arena.Images) {
      console.log(2);
      
      const imageUrls = arena.Images.map((img) => img.url);
      setImages(imageUrls);
    } else {console.log(3);
    }
  }, [arena.Images]);

  // Определение, является ли арена избранной
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
      dispatch(removeFavourite({ arenaId: arena.id }));
    } else {
      dispatch(addFavourite({ arenaId: arena.id }));
    }
    setIsFavourite(!isFavourite);
  };

  const handleDateClick = (dateId: number): void => {
    setSelectedDateId(dateId);
    setModalOpen(true);
  };

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
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
      {images&&images.length > 0 ? (
        <Swiper pagination={pagination}
        modules={[Pagination]} className="mySwiper">
          {images.map((image, i) => (
            <SwiperSlide key={i}>
              <img src={image} alt={`Изображение ${i + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p>No images available</p>
      )}
      <div className="arena-card-header">
        <div className="arena-card-info">
          <h2 className="arena-title">{arena.title}</h2>
          <p className="arena-description">{arena.description}</p>
          <p>
            {arena.country}, {arena.city}, {arena.street} {arena.building}
          </p>
          <p>
            Coordinates: {arena.coordX}, {arena.coordY}
          </p>
          {arena.MetroStation && (
            <p className="arena-metro">Metro Station: {arena.MetroStation.title}</p>
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
      </div>
      <div className="arena-card-footer">
        <div>
          <span>Dates available: {availableDates.length}</span>
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
