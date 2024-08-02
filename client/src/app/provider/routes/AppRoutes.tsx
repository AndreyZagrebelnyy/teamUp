import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ArenasPage from '../../../page/arenas/ArenasPage';
import MainPage from '../../../page/main/MainPage';
import EventsPage from '../../../page/events/EventsPage';

type AppRoutesProps = {
}

const AppRoutes = ({}: AppRoutesProps): JSX.Element => {
  return (
	 <div className='AppRoutes'>
		<Routes>
			<Route path = '/' element = {<MainPage/>}></Route>
			<Route path = '/events' element = {<EventsPage/>}></Route>
			<Route path = '/arenas' element = {<ArenasPage/>}></Route>
		</Routes>
	 </div>
  );
};

export default AppRoutes;
