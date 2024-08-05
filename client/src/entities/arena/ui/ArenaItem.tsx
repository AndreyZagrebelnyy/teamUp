import React from 'react';
import './ArenaItem.css';
import type { ArenaWithMetroStation } from '../types/ArenaType';

type ArenaItemProps = {
  arena: ArenaWithMetroStation;
};

function ArenaItem({ arena }: ArenaItemProps): JSX.Element {
  console.log(arena);

  return (
    <div className="arena-card">
      <div className="arena-card-header">
        <h2 className="arena-title">{arena.title}</h2>
      </div>
      <div className="arena-card-body">
        <p className="arena-description">{arena.description}</p>
        <div className="arena-dates">
          {arena.Dates.map((date) => (
            <span key={date.id} className="arena-date">
              {new Date(date.startDate).toLocaleTimeString()} - {' '}
              {new Date(date.endDate).toLocaleTimeString()}
            </span>
          ))}
        </div>
        <div className="arena-address">
          <span>{`адрес: г. ${arena.city}, ул. ${arena.street}, ${arena.building}`}</span>
        </div>
        <div className="arena-metro">
          <span>{`станция метро: ${arena.MetroStation.title}`}</span>
        </div>
      </div>
    </div>
  );
}

export default ArenaItem;
