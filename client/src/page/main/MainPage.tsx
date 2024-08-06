import React, { useEffect } from 'react';
import './MainPage.css';
import { useAppDispatch, useAppSelector, type RootState } from '../../app/provider/store/store';
import SportItem from '../../entities/sports/ui/SportItem';
import ArenaItem from '../../entities/arena/ui/ArenaItem';
import { getFavouriteArenas } from '../../entities/favourite/FavouriteSlice';

function MainPage(): JSX.Element {
  const sports = useAppSelector((store: RootState) => store.sports.sports);
  const favouriteArenas = useAppSelector(
    (store: RootState) => store.favouriteArenas.favouriteArenas,
  );
  const user = useAppSelector((store: RootState) => store.auth.user);

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
