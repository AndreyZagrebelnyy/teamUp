import React from 'react';
import { NavLink } from "react-router-dom";
import './Navbar.css';

const Navbar = (): JSX.Element => {
  return (
	 <div className='Navbar'>
		<NavLink to = '/'>Главная</NavLink>
		<NavLink to = '/arenas'>Площадки</NavLink>
	 </div>
  );
};

export default Navbar;
