import React, { useEffect } from 'react';
import './MainPage.css';
import { useAppDispatch, useAppSelector, type RootState } from '../../app/provider/store/store';
import SportItem from '../../entities/sports/ui/SportItem';
import { getFavouriteArenas } from '../../entities/favourite/FavouriteSlice';

function MainPage(): JSX.Element {
  const sports = useAppSelector((store: RootState) => store.sports.sports);
  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(getFavouriteArenas());
  }, [dispatch]);

  const handleSportClick = (sportId: number) => {
    history.push(`/events?sport=${sportId}`);
  };

  return (
    <div className="main-page">
      <h1 className="MainPage">Главная страница</h1>
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
    </div>
  );
}
export default MainPage;
