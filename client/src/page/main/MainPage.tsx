import React, { useEffect } from 'react';
import './MainPage.css';
import { useAppDispatch, useAppSelector, type RootState } from '../../app/provider/store/store';
import SportItem from '../../entities/sports/ui/SportItem';
import ArenaItem from '../../entities/arena/ui/ArenaItem';
import { getAllFavouriteArenas } from '../../entities/arena/ArenaSlice';

function MainPage(): JSX.Element {
  const sports = useAppSelector((store: RootState) => store.sports.sports);
  const favouriteArenas = useAppSelector((store: RootState) => store.arenas.favouriteArenas);
  const user = useAppSelector((store: RootState) => store.auth.user);

  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(getAllFavouriteArenas());
  }, [dispatch]);

  return (
    <div className="main-page">
      <h1 className="MainPage">Главная страница</h1>
      <div className="sport-list">
        {sports && sports.map((sport) => <SportItem sport={sport} key={sport.id} />)}
      </div>
      <div>
        <h2>Избранные площадки</h2>
      </div>
      <div>
        {favouriteArenas &&
          user &&
          favouriteArenas.map((arena) => <ArenaItem arena={arena} key={arena.id} />)}
      </div>
    </div>
  );
}

export default MainPage;
