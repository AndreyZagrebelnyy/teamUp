import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useNavigate } from 'react-router-dom';
import { Button } from '@mantine/core';
import ProfileItem from '../../entities/profile/ui/ProfileItem';
import { useAppDispatch, useAppSelector, type RootState } from '../../app/provider/store/store';
import FormAddProfile from '../../entities/profile/ui/FormAddProfile';
import ArenaItem from '../../entities/arena/ui/ArenaItem';
import { getFavouriteArenas } from '../../entities/favourite/FavouriteSlice';
import EventItem from '../../entities/event/ui/EventItem';


import { logout } from '../../entities/user/authSlice';
function ProfilePage(): JSX.Element {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onHandleLogout = (): void => {
    void dispatch(logout());
    navigate('/'); // Навигация после выхода
  };
  const profiles = useSelector((state: RootState) => state.profile.profiles);
  useEffect(() => void dispatch(getFavouriteArenas()), [dispatch]);
 
  const favouriteArenas = useAppSelector(
	(store: RootState) => store.favouriteArenas.favouriteArenas,
 );
  const events = useAppSelector(
	(store: RootState) => store.events.events,
 );
const userEvents = events.filter((event) => event.Users.map((user) => user.id).includes(user.id))


  const user = useSelector((state: RootState) => state.auth.user);
  const [isAdding, setIsAdding] = useState(false);

  if (!profiles || !user) {
    return <div>Loading...</div>;
  }

  const userProfile = profiles.find((profile) => profile.userId === user.id);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
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
      <div>
        {favouriteArenas &&
          favouriteArenas.map((arena) => <ArenaItem arena={arena} key={arena.id} />)}
      </div>
		<div>
        {userEvents &&
          userEvents.map((event) => <EventItem event={event} key={event.id} />)}
      </div>
    </div>
  );
}

export default ProfilePage;
