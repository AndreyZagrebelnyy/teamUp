import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProfiles } from '../../entities/profile/profileSlice';
import ProfileItem from '../../entities/profile/ui/ProfileItem';
import { useAppSelector, type RootState } from '../../app/provider/store/store';
import FormAddProfile from '../../entities/profile/ui/FormAddProfile';
import ArenaItem from '../../entities/arena/ui/ArenaItem';

function ProfilePage(): JSX.Element {
  const dispatch = useDispatch();
  const profiles = useSelector((state: RootState) => state.profile.profiles);
  const user = useSelector((state: RootState) => state.auth.user);
  const [isAdding, setIsAdding] = useState(false);
  const arenas = useAppSelector((store: RootState) => store.arenas.arenas);

  const favouriteArenas = user
    ? arenas.filter((arena) => arena.Users.some((userFromArena) => userFromArena.id === user.id))
    : [];
  const [favArenas, setFavArenas] = useState(favouriteArenas);

  useEffect(() => {

  }, [dispatch, favArenas]);

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
          <div>No profile found for this user</div>
          {isAdding && <FormAddProfile />}
          <button onClick={() => setIsAdding(!isAdding)} type="button">
            {isAdding ? 'Cancel' : 'Add Profile'}
          </button>
        </>
      )}
      <div>
        {favouriteArenas &&
          favouriteArenas.map((arena) => <ArenaItem arena={arena} key={arena.id} />)}
      </div>
    </div>
  );
}

export default ProfilePage;
