import React from 'react';
import './EventsPage.css';
import { useAppSelector } from '../../app/provider/store/store';
import EventItem from '../../entities/event/ui/EventItem';
import type { EventIncludeAll } from '../../entities/event/types/eventType';

function EventsPage(): JSX.Element {
  const events = useAppSelector((store) => store.events.events as EventIncludeAll[]);

  const filteredEvents = events.filter(
    (event) =>
      // Проверяем, что Users существует и является массивом
      Array.isArray(event.Users) && event.Users.length < event.teamSize,
  );

  return (
    <div className="events-page">
      {filteredEvents.map((event) => (
        <EventItem key={event.id} event={event} />
      ))}
    </div>
  );
}

export default EventsPage;
