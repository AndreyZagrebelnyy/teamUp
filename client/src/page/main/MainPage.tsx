import React from 'react';
import './MainPage.css';
import { useSelector } from 'react-redux';
import type { RootState } from '../../app/provider/store/store';
import SportItem from '../../entities/sports/ui/SportItem';

function MainPage(): JSX.Element {
  const  sports  = useSelector((store: RootState) => store.sports.sports);

  console.log(sports);
  return (
    <>
      <div className="MainPage">Главная страница</div>
      {sports && sports.map((sport) => <SportItem sport={sport} key={sport.id} />)}
	  
    </>
  );
}

export default MainPage;
