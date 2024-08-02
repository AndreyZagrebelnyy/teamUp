import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar(): JSX.Element {
  return (
    <div className="Navbar">
      <NavLink to="/">Главная</NavLink>
      <NavLink to="/arenas">Площадки</NavLink>
      <NavLink to="/registration">Регистрация</NavLink>
      <NavLink to="/authorization">Вход</NavLink>
    </div>
  );
}

export default Navbar;
