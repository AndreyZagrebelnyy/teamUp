import React from 'react';
import './MainPage.css';
import { useSelector } from 'react-redux';
import type { RootState } from '../../app/provider/store/store';
import SportItem from '../../entities/sports/ui/SportItem';

function MainPage(): JSX.Element {
  const sports = useSelector((store: RootState) => store.sports.sports);

  return (
    <div className="main-page">
      <h1 className="MainPage">Главная страница</h1>
      <div className="sport-list">
        {sports && sports.map((sport) => (
          <SportItem sport={sport} key={sport.id} />
        ))}
      </div>
    </div>
  );
}

export default MainPage;
