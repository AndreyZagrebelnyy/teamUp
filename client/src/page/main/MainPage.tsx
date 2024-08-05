import React from 'react';
import { useAppSelector } from '../../app/provider/store/store';
import SportItem from '../../entities/sports/ui/SportItem';
import './MainPage.css';

function MainPage(): JSX.Element {
  const sports = useAppSelector((store) => store.sports.sports);

  const handleSportClick = (sportId: number) => {
    history.push(`/events?sport=${sportId}`);
  };

  return (
    <div className="main-page">
      <h1>Выберите вид спорта</h1>
      <div className="sport-icons">
        {sports.map((sport) => (
          <div key={sport.id} className="sport-icon" onClick={() => handleSportClick(sport.id)}>
            <SportItem sport={sport} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainPage;
