import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector, type RootState } from '../../app/provider/store/store';
import SportItem from '../../entities/sports/ui/SportItem';
import { getFavouriteArenas } from '../../entities/favourite/FavouriteSlice';
import EventItem from '../../entities/event/ui/EventItem';
import './MainPage.css';

function MainPage(): JSX.Element {
  const navigate = useNavigate();
  const sports = useAppSelector((store: RootState) => store.sports.sports);
  const events = useAppSelector((store: RootState) => store.events.events);
  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(getFavouriteArenas());
  }, [dispatch]);

  const handleSportClick = (sportId: number) => {
    navigate(`/events?sport=${sportId}`);
  };

  // Фильтрация и сортировка ближайших событий
  const currentDate = new Date();
  const upcomingEvents = events
    .filter((event) => event.Arena.Dates.some((date) => new Date(date.startDate) > currentDate))
    .sort((a, b) => {
      const aDate = new Date(
        a.Arena.Dates.find((date) => new Date(date.startDate) > currentDate).startDate,
      );
      const bDate = new Date(
        b.Arena.Dates.find((date) => new Date(date.startDate) > currentDate).startDate,
      );
      return aDate - bDate;
    })
    .slice(0, 3); // Ограничение до 5 ближайших событий

  return (
    <div className="main-page">
      <img src="all-games.png" className="all-games-img" alt="" />
      <div className="main-page-container">
        <h1>Выберите вид спорта</h1>
        <div className="sport-list">
          {sports &&
            sports.map((sport) => (
              <div key={sport.id} className="sport-icon" onClick={() => handleSportClick(sport.id)}>
                <SportItem sport={sport} />
              </div>
            ))}
        </div>
        <div className="event-container">
          <h1>Ближайшие события</h1>
          <div className="event-item-container">
            {upcomingEvents.map((event) => (
              <EventItem key={event.id} event={event} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
