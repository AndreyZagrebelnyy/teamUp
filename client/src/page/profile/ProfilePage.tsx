import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProfiles } from '../../entities/profile/profileSlice';
import ProfileItem from '../../entities/profile/ui/ProfileItem';
import type { RootState } from '../../app/provider/store/store';
import FormAddProfile from '../../entities/profile/ui/FormAddProfile';


function ProfilePage(): JSX.Element {
  const dispatch = useDispatch();
  const profiles = useSelector((state: RootState) => state.profile.profiles);
  const user = useSelector((state: RootState) => state.auth.user);
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    dispatch(getAllProfiles());
  }, [dispatch]);

  if (!profiles || !user) {
    return <div>Loading...</div>;
  }

  const userProfile = profiles.find(profile => profile.userId === user.id);

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
    </div>
  );
}

export default ProfilePage;
