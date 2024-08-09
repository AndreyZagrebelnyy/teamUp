import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Button, Container, Grid } from '@mantine/core';
import ProfileItem from '../../entities/profile/ui/ProfileItem';
import FormAddProfile from '../../entities/profile/ui/FormAddProfile';
import ArenaItem from '../../entities/arena/ui/ArenaItem';
import { useAppDispatch, useAppSelector, type RootState } from '../../app/provider/store/store';
import { getFavouriteArenas } from '../../entities/favourite/FavouriteSlice';
import EventItem from '../../entities/event/ui/EventItem';
import './ProfileStyle.css';

function ProfilePage(): JSX.Element {
  const user = useSelector((state: RootState) => state.auth.user);
  const events = useAppSelector((store: RootState) => store.events.events);
  const profiles = useSelector((state: RootState) => state.profile.profiles);
  const favouriteArenas = useAppSelector(
    (store: RootState) => store.favouriteArenas.favouriteArenas,
  );
  const dispatch = useAppDispatch();

  useEffect(() => void dispatch(getFavouriteArenas()), [dispatch]);

  const [isAdding, setIsAdding] = useState(false);

  if (!profiles || !user) {
    return <div>Loading...</div>;
  }

  const userEvents = events.filter((event) => event.Users.map((el) => el.id).includes(user.id));
  const userProfile = profiles.find((profile) => profile.userId === user.id);

  return (
    <Container style={{ minWidth: '1500px', width: '100%', padding: '20px' }}>
      <Grid gutter="xl" className="div-arena">
        <Grid.Col span={4}>
          <div style={{ padding: '10px', maxWidth: '100%' }}>
            <h1>Избранные арены:</h1>
            {favouriteArenas && favouriteArenas.length > 0 ? (
              favouriteArenas.map((arena) => <ArenaItem arena={arena} key={arena.id} />)
            ) : (
              <h2>У вас пока нет избранных арен</h2>
            )}
          </div>
        </Grid.Col>

        <Grid.Col
          span={4}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
          {userProfile ? (
            <ProfileItem key={userProfile.id} profile={userProfile} user={user} />
          ) : (
            <>
              {isAdding && <FormAddProfile />}
              <Button onClick={() => setIsAdding(!isAdding)} type="button">
                {isAdding ? 'Отмена' : 'Открыть профиль'}
              </Button>
            </>
          )}
        </Grid.Col>

        <Grid.Col span={4} className="div-event">
          <div style={{ padding: '10px', maxWidth: '100%' }}>
            <h1>Вы записаны:</h1>
            {userEvents && userEvents.length > 0 ? (
              userEvents.map((event) => <EventItem event={event} key={event.id} />)
            ) : (
              <h2>У вас пока нет записанных ивентов</h2>
            )}
          </div>
        </Grid.Col>
      </Grid>
    </Container>
  );
}

export default ProfilePage;
