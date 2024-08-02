import React from 'react';
import './DayItem.css';

type DayItemProps = {
  date: Date;
};

const DayItem = ({ date }: DayItemProps): JSX.Element => {

	function getWeekDay(date:Date){
		let days = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
		return days[date.getDay()]
	}
  return (
    <div className="DayItem">
      {date.getDate()}
      {getWeekDay(date)}
    </div>
  );
};

export default DayItem;
