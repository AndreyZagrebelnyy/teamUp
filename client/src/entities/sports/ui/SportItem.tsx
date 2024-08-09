import React from 'react';
import { FaBasketballBall, FaVolleyballBall, FaFutbol } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import type { Sport } from '../types/sportTypes';
import './SportItem.css';

type SportItemProps = {
  sport: Sport;
};

function SportItem({ sport }: SportItemProps): JSX.Element {
  const navigate = useNavigate();

  const getSportIcon = (title: string) => {
    switch (title.toLowerCase()) {
      case 'баскетбол':
        return <img src='basketball.png' className="icon" />;
      case 'волейбол':
        return <img src='valleybal.png' className="icon" />;
      case 'футбол':
        return <img src='football.png' className="icon" />;
      default:
        return null;
    }
  };

  const handleIconClick = () => {
    navigate(`/events?sport=${sport.id}`);
  };

  return (
    <div className="sport-item" onClick={handleIconClick}>
      <h1>{sport.title}</h1>
      {getSportIcon(sport.title)}
    </div>
  );
}

export default SportItem;
