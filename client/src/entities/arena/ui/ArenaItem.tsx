import React from 'react';
import './ArenaItem.css';
import type { ArenaWithMetroStation } from '../types/ArenaType';
import Carousel1 from '../../../components/Carousel1'; // Убедитесь, что путь к Carousel правильный
import { useAppDispatch } from '../../../app/provider/store/store';
import { addFavourite, removeFavourite } from '../../favourite/FavouriteSlice';

type ArenaItemProps = {
  arena: ArenaWithMetroStation;
};

const carousels: { [key: number]: string[] } = {
  1: ['/foto/arena1.1.jpg', '/foto/arena1.2.jpg', '/foto/arena1.3.jpg'],
  2: ['/foto/arena2.1.jpg', '/foto/arena2.2.jpg', '/foto/arena2.3.jpg'],
  3: ['/foto/arena3.1.jpg', '/foto/arena3.2.jpg', '/foto/arena3.3.jpg'],
  4: ['/foto/arena4.1.jpg', '/foto/arena4.2.jpg', '/foto/arena4.3.jpg'],
  5: ['/foto/arena5.1.jpg', '/foto/arena5.2.jpg', '/foto/arena5.3.jpg'],
  6: ['/foto/arena6.1.jpg', '/foto/arena6.2.jpg', '/foto/arena6.3.jpg'],
};

function ArenaItem({ arena }: ArenaItemProps): JSX.Element {
  const dispatch = useAppDispatch();

  const addToFavourites = () => {
    try {
      void dispatch(addFavourite({ arenaId: arena.id }));
    } catch (error) {
      console.log(error);
    }
  };
  const deleteFromFavourites = () => {
    try {
      void dispatch(removeFavourite({ arenaId: arena.id }));
    } catch (error) {
      console.log(error);
    }
  };

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
              {new Date(date.startDate).toLocaleTimeString()} -{' '}
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
        <div>
          <button type="button" onClick={addToFavourites}>
            Добавить в избранное
          </button>
        </div>
        <div>
          <button type="button" onClick={deleteFromFavourites}>
            Убрать из избранного
          </button>
        </div>
      </div>
    </div>
  );
}

export default ArenaItem;
