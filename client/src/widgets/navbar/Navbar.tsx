import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { Container, Group, Button, Text } from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons/faUserSecret';

import { logout } from '../../entities/user/authSlice';
import type { RootState } from '../../app/provider/store/store';
import { useAppDispatch } from '../../app/provider/store/store';
import './Navbar.css'

function Navbar(): JSX.Element {
  const navigate = useNavigate();
  const user = useSelector((store: RootState) => store.auth.user);
  const dispatch = useAppDispatch();

  const onHandleLogout = (): void => {
    void dispatch(logout());
    navigate('/'); // Навигация после выхода
  };

  return (
    <Container>
      <Group position="apart" className="Navbar">
        <Group spacing="md">
          <NavLink to="/" style={{ textDecoration: 'none' }}>
            <Text weight={500}>Главная</Text>
          </NavLink>
          <NavLink to="/arenas" style={{ textDecoration: 'none' }}>
            <Text weight={500}>Площадки</Text>
          </NavLink>
          <NavLink to="/events" style={{ textDecoration: 'none' }}>
            <Text weight={500}>События</Text>
          </NavLink>
        </Group>

        {user ? (
          <Group spacing="md">
            {user.isAdmin && (
              <NavLink to="/admin_panel" style={{ textDecoration: 'none' }}>
                <Text weight={500}>Админ панель</Text>
              </NavLink>
            )}
            <NavLink to="/profile" style={{ textDecoration: 'none' }}>
              <Group align="center">
                <FontAwesomeIcon icon={faUserCircle} size="2x" />
                <Text weight={500}>Профиль</Text>
              </Group>
            </NavLink>
            <Button variant="outline" onClick={onHandleLogout}>
              <Text weight={500}>Выход</Text>
            </Button>
          </Group>
        ) : (
          <Group spacing="md">
            <NavLink to="/registration" style={{ textDecoration: 'none' }}>
              <Text weight={500}>Регистрация</Text>
            </NavLink>
            <NavLink to="/authorization" style={{ textDecoration: 'none' }}>
              <Text weight={500}>Вход</Text>
            </NavLink>
          </Group>
        )}
      </Group>
    </Container>
  );
}

export default Navbar;
