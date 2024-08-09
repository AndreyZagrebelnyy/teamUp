import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { Container, Group, Button, Text, Avatar } from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { IconBrandTelegram } from '@tabler/icons-react';
import { logout } from '../../entities/user/authSlice';
import type { RootState } from '../../app/provider/store/store';
import { useAppDispatch, useAppSelector } from '../../app/provider/store/store';
import './Navbar.css';

function Navbar(): JSX.Element {
  const navigate = useNavigate();
  const user = useSelector((store: RootState) => store.auth.user);
  const dispatch = useAppDispatch();

  const profiles = useAppSelector((store) =>
    store.profile.profiles.find((us) => us.userId === user?.id),
  );

  const onHandleLogout = (): void => {
    void dispatch(logout());
    navigate('/'); // Навигация после выхода
  };

  return (
    <Container>
      <Group position="apart" className="Navbar">
        <Group spacing="md">
          <NavLink to="/" style={{ textDecoration: 'none' }}>
            <Text weight={500} className="logo">
              Team Up
            </Text>
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
              <Group align="center" className="navbar-avatar-container">
                {user && profiles ? (
                  <>
                    <Avatar
                      src={profiles.image}
                      alt={profiles.firstName}
                      radius="xl"
                      size="lg"
                      className="avatar"
                    />
                    <div className="profile-info">
                      <Text className="profile-name">
                        {profiles.firstName} {profiles.lastName}
                      </Text>
                      <div className="profile-telegram">
                        <IconBrandTelegram className="telegram-icon" />
                        <Text>@{profiles.telegram}</Text>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <FontAwesomeIcon icon={faUserCircle} size="2x" />
                    <Text weight={500}>Профиль</Text>
                    <Button variant="outline" onClick={onHandleLogout}>
                      <Text weight={500}>Выход</Text>
                    </Button>
                  </>
                )}
              </Group>
            </NavLink>
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
