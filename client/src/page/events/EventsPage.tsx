import React from 'react';
import './EventsPage.css';
import TimeLine from '../../widgets/timline/TimeLine';

type EventsPageProps = {};

const EventsPage = ({}: EventsPageProps): JSX.Element => {
  return (
    <>
      <TimeLine />
      <div className="EventsPage"></div>
    </>
  );
};

export default EventsPage;
