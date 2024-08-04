import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../app/provider/store/store';
import FormAddProfile from '../../entities/profile/ui/FormAddProfile';
import ProfileItem from '../../entities/profile/ui/ProfileItem';


function ProfilePage(): JSX.Element {
  const { profiles, errors, isLoading } = useSelector((store: RootState) => store.profile);
  const user = useSelector((store: RootState) => store.auth.user);
  console.log(errors, isLoading);
  
  return (
    <div className="ProfilePage">
      {user && <FormAddProfile />}
      {profiles && profiles.map((profile) => <ProfileItem profile={profile} user={user} key={profile.id} />)}
      <span>{errors}</span>
    </div>
  );
}

export default ProfilePage;
