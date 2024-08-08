import React, { useState } from 'react';
import { Avatar, Button, Group, Text, Card, Paper } from '@mantine/core';
import { Settings02Icon } from 'hugeicons-react'; // Импортируем нужную иконку
import { useNavigate } from 'react-router-dom';
import type { User } from '../../user/types/userType';
import { removeProfile } from '../profileSlice';
import type { Profile } from '../types/ProfileType';
import FormUpdateProfile from './FormUpdateProfile';
import { useAppDispatch } from '../../../app/provider/store/store';
import { logout } from '../../user/authSlice';

type ProfileItemProps = {
  profile: Profile;
  user: User;
};

function ProfileItem({ profile, user }: ProfileItemProps): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const onHandleLogout = (): void => {
    void dispatch(logout());
    navigate('/'); // Навигация после выхода
  };

  const onHandleDelete = (): void => {
    void dispatch(removeProfile(profile.id));
  };

  return (
    <div>
      <Card
        padding="lg"
        shadow="sm"
        style={{
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          minHeight: '200px',
        }}
      >
        <Avatar src={profile.image} alt="Profile" radius='xl' size="lg" />
        <div style={{ marginTop: 16 }}>
          <Text weight={500} size="xl">
            {profile.firstName} {profile.lastName}
          </Text>
          <Text color="gray" size="sm">
            Telegram: {profile.telegram}
          </Text>
          <Text color="gray" size="sm">
            Email: {profile.telegram}
          </Text>
        </div>

        {user && user.id === profile.userId && (
          <>
            <div
              style={{
                position: 'absolute',
                top: 8,
                right: 8,
                cursor: 'pointer',
              }}
            >
              <Settings02Icon onClick={() => setIsMenuOpen(!isMenuOpen)} size={24} />
            </div>
            {isMenuOpen && (
              <Group
                spacing="xs"
                style={{
                  marginTop: 'auto',
                  display: 'flex',
                  justifyContent: 'flex-end',
                  marginTop: 16,
                }}
              >
                <Button onClick={onHandleDelete} color="red">
                  Удалить
                </Button>
                <Button onClick={() => setIsEditing(!isEditing)}>
                  {isEditing ? 'Отмена' : 'Редактировать'}
                </Button>
                <Button onClick={() => onHandleLogout()}>Выход</Button>
              </Group>
            )}
          </>
        )}
      </Card>

      {isEditing && (
        <Paper padding="lg" shadow="sm" style={{ marginTop: 16 }}>
          <FormUpdateProfile profile={profile} />
          <Button onClick={() => setIsEditing(false)} style={{ marginTop: '1rem' }}>
            Закрыть
          </Button>
        </Paper>
      )}
    </div>
  );
}

export default React.memo(ProfileItem);
