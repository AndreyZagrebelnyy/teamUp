import React, { useState } from 'react';
import './EventItem.css';
import { Modal, Button, Text } from '@mantine/core';
import type { EventIncludeAll } from '../types/eventType';
import { useAppDispatch, useAppSelector } from '../../../app/provider/store/store';
import { addUserEvent } from '../../userEvent/userEventSlice';

type EventsItemProps = {
  event: EventIncludeAll;
};

function EventItem({ event }: EventsItemProps): JSX.Element {
  const dispatch = useAppDispatch();
  const sports = useAppSelector((store) => store.sports.sports);
  const levels = useAppSelector((store) => store.level.levels);
  const profiles = useAppSelector((store) => store.profile.profiles);
  const user = useAppSelector((store) => store.auth.user);

  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const onHandleAddToEvent = () => {
    if (!user) return;

    const isUserAlreadyInEvent = event.Users.some((eventUser) => eventUser.id === user.id);
    const userProfile = profiles.find((profile) => profile.userId === user.id);

    if (!userProfile) {
      setModalMessage('У вас должен быть профиль для записи на событие!');
      setModalOpen(true);
      return;
    }

    if (isUserAlreadyInEvent) {
      setModalMessage('Вы уже записаны на это событие!');
      setModalOpen(true);
      return;
    }
    if (event.Users.length >= event.teamSize) {
      setModalMessage('Достигнуто максимальное количество участников');
      setModalOpen(true);
      return;
    }

    void dispatch(addUserEvent({ eventId: event.id, userId: user.id }));
  };

  const sport = sports.find((el) => el.id === event.sportId);
  const level = levels.find((el) => el.id === event.levelId);
  const eventDate = event.Arena.Dates.find((data) => data.id === event.arenaDateId);
  const formattedDate = eventDate
    ? new Date(eventDate.startDate).toLocaleDateString()
    : 'Дата не найдена';


  return (
    <div className="event-card">
      <Modal opened={modalOpen} onClose={() => setModalOpen(false)} title="Информация">
        <Text>{modalMessage}</Text>
        <Button onClick={() => setModalOpen(false)}>Закрыть</Button>
      </Modal>

      <div className="event-card-header">
        <p className="event-arena-title">{event.Arena.title}</p>
      </div>
      <div className="event-card-body">
        <h1 className="event-title">{formattedDate}</h1>
        <p className="event-price">Цена: {event.price}</p>
        <p className="event-sport">Спорт: {sport?.title || 'Неизвестно'}</p>
        <p className="event-level">Уровень: {level?.title || 'Неизвестно'}</p>
        <div className="event-users">
          <h2>Участники:</h2>
          {event.Users.map((eventUser) => {
            const userProfile = profiles.find((profile) => profile.userId === eventUser.id);
            return (
              <p key={eventUser.id} className="event-user">
                {userProfile ? `${userProfile.firstName} ${userProfile.lastName}` : null}
              </p>
            );
          })}
        </div>
        <Button
          onClick={onHandleAddToEvent}
          disabled={
            event.Users.some((eventUser) => eventUser.id === user?.id) ||
            !profiles.some((profile) => profile.userId === user?.id)
          }
        >
          {event.Users.some((eventUser) => eventUser.id === user?.id)
            ? 'Вы уже записаны'
            : !profiles.some((profile) => profile.userId === user?.id)
              ? 'Создайте профиль'
              : 'Записаться на ивент'}
        </Button>

      </div>
    </div>
  );
}

export default EventItem;
