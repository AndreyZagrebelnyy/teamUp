import React, { useState } from 'react';
import './EventItem.css';
import { Modal, Button, Text } from '@mantine/core';
import type { EventIncludeAll } from '../types/eventType';
import { useAppDispatch, useAppSelector } from '../../../app/provider/store/store';
import { addUserEvent } from '../../userEvent/userEventSlice';
import { getAllEvents } from '../eventSlice';

type EventsItemProps = {
  event: EventIncludeAll;
};

function EventItem({
  event,
  onHandleAddToEvent,

}: EventsItemProps): JSX.Element {
  const sports = useAppSelector((store) => store.sports.sports);
  const levels = useAppSelector((store) => store.level.levels);
  const profiles = useAppSelector((store) => store.profile.profiles);
  const user = useAppSelector((store) => store.auth.user);
  const sport = sports.find((el) => el.id === event.sportId);
  const level = levels.find((el) => el.id === event.levelId);
  const eventDate = event.Arena.Dates.find((data) => data.id === event.arenaDateId);
  const formattedDate = eventDate
    ? new Date(eventDate.startDate).toLocaleDateString()
    : 'Дата не найдена';
  const usersEvents = useAppSelector((store) => store.userEvent.userEvent);
  return (
    <div className="event-card">
      

      <div className="event-card-header">
        <p className="event-arena-title">{event.Arena.title}</p>
      </div>
      <div className="event-card-body">
        <h1 className="event-title">{formattedDate}</h1>
        <p className="event-sport">Спорт: {sport?.title || 'Неизвестно'}</p>
        <p className="event-level">Уровень: {level?.title || 'Неизвестно'}</p>
        <p className="event-level">Кол-во игроков: {event.teamSize || 'Неизвестно'}</p>
        <p className="event-level">
          Осталось мест:{' '}
          {+event.teamSize - +usersEvents.some((el) => el.eventId === event.id) || 'Неизвестно'}
        </p>
        <div className="event-users">
          <h2>Участники:</h2>
          <div className="event-users-container">
            {event.Users.map((eventUser) => {
              const userProfile = profiles.find((profile) => profile.userId === eventUser.id);
              return (
                <p key={eventUser.id} className="event-user">
                  {userProfile && userProfile.image ? (
                    <img className="user_avatar" src={userProfile.image} alt="" />
                  ) : null}
                </p>
              );
            })}
          </div>
        </div>
        <Button
          onClick={() => onHandleAddToEvent(event.id)}
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
