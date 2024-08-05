import React from 'react';
import './EventsPage.css';
// import TimeLine from '../../widgets/timline/TimeLine';
import { useAppSelector } from '../../app/provider/store/store';
import EventItem from '../../entities/event/ui/EventItem';

function EventsPage(): JSX.Element {
  const events = useAppSelector((store) => store.events.events);
  console.log(events);

  return (
    <>
      <div className="EventsPage" />
      {events && events.map((event) => <EventItem key={event.id} event={event} />)}
    </>
  );
}

export default EventsPage;
