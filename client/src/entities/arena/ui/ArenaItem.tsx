import React, { useEffect, useState } from 'react';
import './ArenaItem.css';
import type { ArenaWithMetroStation } from '../types/ArenaType';
import Carousel from '../../../components/Carousel';
import { useAppDispatch, useAppSelector } from '../../../app/provider/store/store';
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
  7: ['/foto/arena6.1.jpg', '/foto/arena6.2.jpg', '/foto/arena6.3.jpg'],
};

function ArenaItem({ arena }: ArenaItemProps): JSX.Element {
  const dispatch = useAppDispatch();

  const { user } = useAppSelector((store) => store.auth);

  const [isFavourite, setIsFavourite] = useState(
    arena.Users.some((userFromServer) => userFromServer.id === user.id),
  );

  useEffect(() => {
    setIsFavourite(arena.Users.some((userFromObject) => userFromObject.id === user.id));
  }, [arena.Users, user]);

  const toggleFavourite = () => {
    if (isFavourite) {
      dispatch(removeFavourite({ arenaId: arena.id }));
    } else {
      dispatch(addFavourite({ arenaId: arena.id }));
    }
    setIsFavourite(!isFavourite); // Переключаем состояние
  };

  return (
    <div className="arena-card">
      <div className="arena-card-header">
        <h2 className="arena-title">{arena.title}</h2>
      </div>
      <Carousel images={carousels[arena.id]} />
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
          <button onClick={toggleFavourite}>
            {isFavourite ? 'Убрать из избранного' : 'Добавить в избранное'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ArenaItem;
