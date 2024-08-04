import React from 'react';
import './ArenaItem.css';
import type { ArenaWithMetroStation } from '../types/ArenaType';
import Carousel1 from '../../../components/Carousel1'; // Убедитесь, что путь к Carousel правильный

type ArenaItemProps = {
  arena: ArenaWithMetroStation;
};

function ArenaItem({ arena }: ArenaItemProps): JSX.Element {
  const carousels = {
    1: ['/foto/arena1.1.jpg', '/foto/arena1.2.jpg', '/foto/arena1.3.jpg'],
    2: ['/foto/arena2.1.jpg', '/foto/arena2.2.jpg', '/foto/arena2.3.jpg'],
    3: ['/foto/arena3.1.jpg', '/foto/arena3.2.jpg', '/foto/arena3.3.jpg'],
    4: ['/foto/arena4.1.jpg', '/foto/arena4.2.jpg', '/foto/arena4.3.jpg'],
    5: ['/foto/arena5.1.jpg', '/foto/arena5.2.jpg', '/foto/arena5.3.jpg'],
    6: ['/foto/arena6.1.jpg', '/foto/arena6.2.jpg', '/foto/arena6.3.jpg'],
  };

  return (
    <>
      <div>{arena.title}</div>
      <div>{arena.description}</div>
      {arena.Dates.slice(0, 3).map((date, index) => (
        <div key={index}>
          <h1>
            {new Date(date.startDate).toLocaleTimeString().split(':').splice(0, 2).join(':')} -
            {new Date(date.endDate).toLocaleTimeString().split(':').splice(0, 2).join(':')}
          </h1>
        </div>
      ))}
      <div>{`адрес: г. ${arena.city}, ул. ${arena.street}, ${arena.building}`}</div>
      <div>{`станция метро: ${arena.MetroStation.title}`}</div>
      <div className="carousels-container">
        {carousels[arena.id] && (
          <div className="carousel-item">
            <Carousel1 images={carousels[arena.id]} />
          </div>
        )}
      </div>
    </>
  );
}

export default ArenaItem;
