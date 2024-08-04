import React from 'react';
import './MainPage.css';
import { useAppSelector, type RootState } from '../../app/provider/store/store';
import SportItem from '../../entities/sports/ui/SportItem';
import ArenaItem from '../../entities/arena/ui/ArenaItem';

function MainPage(): JSX.Element {
  const sports = useAppSelector((store: RootState) => store.sports.sports);
  const arenas = useAppSelector((store: RootState) => store.arenas.arenas);
  const user = useAppSelector((store: RootState) => store.auth.user);

  // Предполагается, что arena.Users - это массив объектов User
  const favouriteArenas = arenas.filter((arena) =>
    arena.Users.some((userFromArena) => userFromArena.id === user.id),
  );

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
          favouriteArenas.map((arena) => <ArenaItem arena={arena} key={arena.id} />)}
      </div>
    </div>
  );
}

export default MainPage;
