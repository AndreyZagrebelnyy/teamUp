import React from 'react';
import './AppRoutes.css';
import { Route, Routes } from 'react-router-dom';
import ArenasPage from '../../../page/arenas/ArenasPage';
import MainPage from '../../../page/main/MainPage';

type AppRoutesProps = {
}

const AppRoutes = ({}: AppRoutesProps): JSX.Element => {
  return (
	 <div className='AppRoutes'>
		<Routes>
			<Route path = '/' element = {<MainPage/>}></Route>
			<Route path = '/arenas' element = {<ArenasPage/>}></Route>
		</Routes>
	 </div>
  );
};

export default AppRoutes;
