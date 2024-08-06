import React, { useState, useEffect } from 'react';
import { useAppSelector } from '../../app/provider/store/store';
import EventItem from '../../entities/event/ui/EventItem';
import { useLocation } from 'react-router-dom';
import type { EventIncludeAll } from '../../entities/event/types/eventType';
import './EventsPage.css';

function EventsPage(): JSX.Element {
  const events = useAppSelector((store) => store.events.events as EventIncludeAll[]);
  const sports = useAppSelector((store) => store.sports.sports);
  const levels = useAppSelector((store) => store.level.levels);
  const location = useLocation();

  const [selectedSport, setSelectedSport] = useState<string>('');
  const [selectedLevel, setSelectedLevel] = useState<string>('');
  const [date, setDate] = useState<string>('');

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const sportParam = params.get('sport');
    if (sportParam) {
      setSelectedSport(sportParam);
    }
  }, [location.search]);

  const handleSportChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSport(e.target.value);
  };

  const handleLevelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLevel(e.target.value);
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };
  
    const filteredUserEvents = events.filter(
    (event) =>
      // Проверяем, что Users существует и является массивом
      Array.isArray(event.Users) && event.Users.length < event.teamSize,
  );

  const filteredEvents = events.filter((event: EventIncludeAll) => {
    const eventDate = event.Arena.Dates.find((data) => data.id === event.arenaDateId)?.startDate.split('T')[0];
    const sportMatch = selectedSport ? event.sportId === parseInt(selectedSport) : true;
    const levelMatch = selectedLevel ? event.levelId === parseInt(selectedLevel) : true;
    const dateMatch = date ? eventDate === date : true;

    return sportMatch && levelMatch && dateMatch;
  });

  return (
    <>
      <div className="filter-form">
        <select value={selectedSport} onChange={handleSportChange}>
          <option value="">Все виды спорта</option>
          {sports.map((sport) => (
            <option key={sport.id} value={sport.id}>
              {sport.title}
            </option>
          ))}
        </select>
        <select value={selectedLevel} onChange={handleLevelChange}>
          <option value="">Все уровни</option>
          {levels.map((level) => (
            <option key={level.id} value={level.id}>
              {level.title}
            </option>
          ))}
        </select>
        <input type="date" value={date} onChange={handleDateChange} />
        <button type="button" onClick={() => { setSelectedSport(''); setSelectedLevel(''); setDate(''); }}>Сбросить</button>
      </div>
      <div className="events-page">
      {filteredUserEvents.map((event) => (
        <EventItem key={event.id} event={event} />
      ))}
    </div>
    </>
  );
}

export default EventsPage;
