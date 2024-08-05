import React from 'react';
import './EventItem.css';
import type { EventIncludeAll } from '../types/eventType';
import { useAppSelector } from '../../../app/provider/store/store';

type EventsItemProps = {
  event: EventIncludeAll;
};

function EventItem({ event }: EventsItemProps): JSX.Element {
  const sports = useAppSelector((store) => store.sports.sports);
  const levels = useAppSelector((store) => store.level.levels);

  const sport = sports.find((el) => el.id === event.sportId);
  const level = levels.find((el) => el.id === event.levelId);

  return (
    <div className="event-card">
      <div className="event-card-header">
        <p className="event-price">{event.Arena.title}</p>
      </div>
      <div className="event-card-body">
        <h1 className="event-title">
          {event.Arena.Dates.map((data) => {
            if (data.id === event.arenaDateId) {
              return new Date(data.startDate).toLocaleDateString();
            }
          })}
        </h1>
        <p className="event-price">{event.price}</p>
        <p className="event-price">{sport?.title}</p>
        <p className="event-price">{level?.title}</p>
      </div>
    </div>
  );
}

export default EventItem;
