import React, { useState } from 'react';
import { Avatar, Button, Group, Text, Card, Box, Stack, Paper } from '@mantine/core';
import { Settings02Icon } from 'hugeicons-react';
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

  const handleClose = () => {
    setIsEditing(false); // Закрытие формы
  };

  const onHandleLogout = (): void => {
    void dispatch(logout());
    navigate('/');
  };

  const onHandleDelete = (): void => {
    void dispatch(removeProfile(profile.id));
  };

  return (
    <div>
      <Card
        padding="xl"
        shadow="md"
        radius="md"
        style={{
          position: 'relative',
          backgroundColor: '#fff',
        }}
      >
        <Box style={{ position: 'absolute', top: 16, right: 16 }}>
          <Settings02Icon
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            size={24}
            style={{ cursor: 'pointer' }}
          />
        </Box>
        <Stack align="center">
          <Avatar src={profile.image} alt="Profile" radius="xl" size="xl" />
          <Text weight={500} size="xl">
            {profile.firstName} {profile.lastName}
          </Text>
          <Text color="dimmed" size="sm">
            Telegram: {profile.telegram}
          </Text>
          <Text color="dimmed" size="sm">
            Email: {user.email}
          </Text>
          {user && user.id === profile.userId && (
            <Box mt="md" style={{ width: '100%' }}>
              {isMenuOpen && (
                <Group position="right" mt="sm">
                  <Button onClick={onHandleDelete} color="red">
                    Удалить
                  </Button>
                  <Button onClick={() => setIsEditing(!isEditing)}>
                    {isEditing ? 'Отмена' : 'Редактировать'}
                  </Button>
                  <Button onClick={onHandleLogout}>Выход</Button>
                </Group>
              )}
            </Box>
          )}
        </Stack>
      </Card>

      {isEditing && (
        <Paper padding="lg" shadow="sm" radius="md" mt="md">
          <FormUpdateProfile profile={profile} handleClose={handleClose} />
        </Paper>
      )}
    </div>
  );
}

export default React.memo(ProfileItem);
