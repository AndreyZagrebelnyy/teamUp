import React, { useState } from 'react';
import type { User } from '../../user/types/userType';
import { removeProfile } from '../profileSlice';
import type { Profile } from '../types/ProfileType';
import FormUpdateProfile from './FormUpdateProfile';
import { useAppDispatch } from '../../../app/provider/store/store';

type ProfileItemProps = {
  profile: Profile;
  user: User;
};

function ProfileItem({ profile, user }: ProfileItemProps): JSX.Element {
  const dispatch = useAppDispatch();
  const [active, setActive] = useState(false);

  const onHandleDelete = (): void => {
    void dispatch(removeProfile(profile.id));
  };

  return (
    <div className="ProfileItem">
      <h1>{profile.firstName}</h1>
      <p>{profile.firstName}</p>
      <p>{profile.lastName}</p>
      <p>{profile.telegram}</p>
      <img src={profile.image} alt='123'/> 
      {user && user.id === profile.userId && (
        <>
          <button onClick={onHandleDelete} type="button">
            remove
          </button>
          <button type="button" onClick={() => setActive((prev) => !prev)}>
            update
          </button>
        </>
      )}
      {active && <FormUpdateProfile profile={profile} />}
    </div>
  );
}

export default React.memo(ProfileItem);