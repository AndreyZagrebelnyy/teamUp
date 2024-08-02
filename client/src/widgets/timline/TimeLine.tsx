import React from 'react';
import './TimeLine.css';
import DayItem from './ui/DayItem';

type TimeLineProps = {};

const TimeLine = ({}: TimeLineProps): JSX.Element => {
  let currentWeek: Date[] = [];

  for (let i = 0; i < 7; i++) {
    const date = new Date();
    date.setDate(date.getDate() + i);
    currentWeek.push(date);
  }

  return (
    <>
      <div className="timeLine">
        {currentWeek.map((date) => (
          <div>{<DayItem date = {date}/>}</div>
        ))}
      </div>
    </>
  );
};

export default TimeLine;
