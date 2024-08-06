import React, { useEffect, useState } from 'react';
import './MainPage.css';
import { useAppSelector, type RootState } from '../../app/provider/store/store';
import SportItem from '../../entities/sports/ui/SportItem';
import ArenaItem from '../../entities/arena/ui/ArenaItem';

function MainPage(): JSX.Element {
  const sports = useAppSelector((store: RootState) => store.sports.sports);

  return (
    <div className="main-page">
      <h1 className="MainPage">Главная страница</h1>
      <div className="sport-list">
        {sports && sports.map((sport) => <SportItem sport={sport} key={sport.id} />)}
      </div>
      <div>
        <h2>Избранные площадки</h2>
      </div>
    </div>
  );
}

export default MainPage;
