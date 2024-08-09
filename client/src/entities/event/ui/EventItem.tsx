import React from 'react';
import './EventItem.css';
import { Button } from '@mantine/core';
import type { EventIncludeAll } from '../types/eventType';
import { useAppDispatch, useAppSelector } from '../../../app/provider/store/store';
import { addUserEvent } from '../../userEvent/userEventSlice';

type EventsItemProps = {
  event: EventIncludeAll;
  onHandleAddToEvent: (eventId: string) => void;
};

function EventItem({ event, onHandleAddToEvent }: EventsItemProps): JSX.Element {
  const dispatch = useAppDispatch();
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

  const registeredUsersCount = event.Users.length;
  const remainingSpots = event.teamSize - registeredUsersCount;
  const isUserRegistered = event.Users.some((eventUser) => eventUser.id === user?.id);
  const hasUserProfile = profiles.some((profile) => profile.userId === user?.id);

  const handleAddToEvent = async () => {
    try {
      await dispatch(addUserEvent(event.id));
      onHandleAddToEvent(event.id);
    } catch (error) {
      console.error('Ошибка добавления пользователя на событие:', error);
    }
  };

  return (
    <div className="event-card">
      <div className="event-card-header">
        <p className="event-arena-title">{event.Arena.title}</p>
      </div>
      <div className="event-card-body">
        <h1 className="event-title">{formattedDate}</h1>
        <p className="event-sport">Спорт: {sport?.title || 'Неизвестно'}</p>
        <p className="event-level">Уровень: {level?.title || 'Неизвестно'}</p>
        <p className="event-team-size">Кол-во игроков: {event.teamSize || 'Неизвестно'}</p>
        <p className="event-remaining-spots">
          Осталось мест: {remainingSpots > 0 ? remainingSpots : 'Нет доступных мест'}
        </p>
        <div className="event-users">
          <h2>Участники:</h2>
          <div className="event-users-container">
            {event.Users.map((eventUser) => {
              const userProfile = profiles.find((profile) => profile.userId === eventUser.id);
              return (
                <div key={eventUser.id} className="event-user">
                  {userProfile && userProfile.image ? (
                    <img className="user-avatar" src={userProfile.image} alt="" />
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
        <Button
          className="event-button"
          onClick={handleAddToEvent}
          disabled={isUserRegistered || !hasUserProfile || remainingSpots <= 0}
        >
          {isUserRegistered
            ? 'Вы уже записаны'
            : !hasUserProfile
            ? 'Создайте профиль'
            : 'Записаться на ивент'}
        </Button>
      </div>
    </div>
  );
}

export default EventItem;
