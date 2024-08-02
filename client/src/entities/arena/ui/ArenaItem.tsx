import React from 'react';
import './ArenaItem.css';
import type { ArenaWithMetroStation } from '../types/ArenaType';

type ArenaItemProps = {
  arena: ArenaWithMetroStation;
};

function ArenaItem({ arena }: ArenaItemProps): JSX.Element {
  console.log(arena);

  return (
    <>
      <div>{arena.title}</div>
      <div>{arena.description}</div>
      <div>
        <h1>
          {new Date(arena.Dates[0].startDate)
            .toLocaleTimeString()
            .split(':')
            .splice(0, 2)
            .join(':')}{' '}
          -
          {new Date(arena.Dates[0].startDate)
            .toLocaleTimeString()
            .split(':')
            .splice(0, 2)
            .join(':')}
        </h1>
      </div>
      <div>
        <h1>
          {new Date(arena.Dates[1].startDate)
            .toLocaleTimeString()
            .split(':')
            .splice(0, 2)
            .join(':')}{' '}
          -
          {new Date(arena.Dates[1].startDate)
            .toLocaleTimeString()
            .split(':')
            .splice(0, 2)
            .join(':')}
        </h1>
      </div>
      <div>
        <h1>
          {new Date(arena.Dates[2].startDate)
            .toLocaleTimeString()
            .split(':')
            .splice(0, 2)
            .join(':')}{' '}
          -
          {new Date(arena.Dates[2].startDate)
            .toLocaleTimeString()
            .split(':')
            .splice(0, 2)
            .join(':')}
        </h1>
      </div>

      <div>{`адрес: г. ${arena.city}, ул. ${arena.street}, ${arena.building}`}</div>
      <div>{`станция метро: ${arena.MetroStation.title}`}</div>
    </>
  );
}

export default ArenaItem;
