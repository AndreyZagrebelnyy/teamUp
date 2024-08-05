import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, NavLink, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faUserNinja } from '@fortawesome/free-solid-svg-icons';

import { faUserSecret } from '@fortawesome/free-solid-svg-icons/faUserSecret';
import { logout } from '../../entities/user/authSlice';
import type { RootState } from '../../app/provider/store/store';
import { useAppDispatch } from '../../app/provider/store/store';

function Navbar(): JSX.Element {
  const navigate = useNavigate();
  const user = useSelector((store: RootState) => store.auth.user);
  const dispatch = useAppDispatch();

  const onHandleLogout = (): void => {
    void dispatch(logout());
  };

  useEffect(() => {
    
  },[])
  return (
    <div className="Navbar">
      <NavLink to="/">Главная</NavLink>
      <NavLink to="/arenas">Площадки</NavLink>
      <NavLink to="/events">События</NavLink>

      {user ? (
        <>
        {user.isAdmin && <NavLink to="/admin_panel">Админ панель</NavLink>}
          <div className="user-info">
            <NavLink to="/profile">Профиль</NavLink>
            <FontAwesomeIcon icon={faUserSecret} size="3x" onClick={onHandleLogout} />
          </div>
          <NavLink onClick={onHandleLogout}>Выход</NavLink>
        </>
      ) : (
        <ul>
          <li>
            <NavLink to="/registration">Регистрация</NavLink>
          </li>
          <li>
            <NavLink to="/authorization">Вход</NavLink>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Navbar;
