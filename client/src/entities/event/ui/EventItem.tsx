import React from'react';
import { EventIncludeAll } from '../types/eventType';


type EventsItemProps = {
  event: EventIncludeAll
}

function EventItem({event}: EventsItemProps):JSX.Element {
  return (
      <div key={event.id}>
        
        <h1>{event.price}</h1>
        <h1>{event.arenaDateId}</h1>
        <h1>{event.price}</h1>
      </div>
  );
}

export default EventItem;