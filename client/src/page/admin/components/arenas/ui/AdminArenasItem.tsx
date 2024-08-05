import React, { useState } from 'react';
import { AddCircleHalfDotIcon } from 'hugeicons-react';
import type { ArenaWithMetroStation } from '../../../../../entities/arena/types/ArenaType';
import DateAddForm from '../../../../../entities/date/ui/DateAddForm';
import './AdminsArenasItem.css';

type ArenaItemProps = {
  arena: ArenaWithMetroStation;
};

function AdminArenasItem({ arena }: ArenaItemProps): JSX.Element {
  const [calendar, setCalendar] = useState(false);
  
  // Ensure arena.MetroStation is defined and has a title property
  const metro = arena.MetroStation ? arena.MetroStation.title : 'Нет информации о метро';
  const dates = Array.isArray(arena.Dates) ? arena.Dates : [];
  
  console.log(arena);

  return (
    <div className="arena-card" key={arena.id}>
      <div className="arena-card-header">
        <h2 className="arena-title">{arena.title}</h2>
      </div>
      <div className="arena-card-body">
        <p className="arena-description">{arena.description}</p>
        <div className="arena-dates">
          {dates.length > 0 &&
            dates.map((date) => (
              <span key={date.id} className="arena-date">
                {new Date(date.startDate).toLocaleTimeString()} -{' '}
                {new Date(date.endDate).toLocaleTimeString()}
              </span>
            ))}
          <AddCircleHalfDotIcon onClick={() => setCalendar((prev) => !prev)} />
        </div>
        <div className="arena-address">
          <span>{`адрес: г. ${arena.city}, ул. ${arena.street}, ${arena.building}`}</span>
        </div>
        <div className="arena-metro">
          <span>{`станция метро: ${metro}`}</span>
        </div>
      </div>
      {calendar && <DateAddForm arenaId={arena.id} />}
    </div>
  );
}

export default AdminArenasItem;