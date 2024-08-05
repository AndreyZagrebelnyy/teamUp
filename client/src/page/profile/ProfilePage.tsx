import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getAllProfiles } from '../../entities/profile/profileSlice';
import ProfileItem from '../../entities/profile/ui/ProfileItem';
import type { RootState } from '../../app/provider/store/store';
import FormAddProfile from '../../entities/profile/ui/FormAddProfile';


const Button = styled.button`
  padding: 10px 15px;
  background-color: #4CAF50;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;


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
          {isAdding && <FormAddProfile />}
          <Button onClick={() => setIsAdding(!isAdding)} type="button">
            {isAdding ? 'Отмена' : 'Открыть профиль'}
          </Button>
        </>
      )}
    </div>
  );
}

export default ProfilePage;
