import React, { useState } from 'react';
import styled from 'styled-components';
import type { User } from '../../user/types/userType';
import { removeProfile } from '../profileSlice';
import type { Profile } from '../types/ProfileType';
import FormUpdateProfile from './FormUpdateProfile';
import { useAppDispatch } from '../../../app/provider/store/store';

// Styled Components
const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin: 10px 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
  border: 2px solid #ccc;
  margin-right: 20px;
`;

const ProfileDetails = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
`;

const ProfileName = styled.h1`
  margin: 0 0 10px;
  font-size: 24px;
  color: #333;
`;

const ProfileInfo = styled.p`
  margin: 5px 0;
  color: #555;
`;

const Button = styled.button`
  padding: 10px 15px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 10px;

  &:hover {
    background-color: #45a049;
  }
`;

// Styled Modal Components
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  width: 80%;
  max-width: 600px;
`;

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
    <>
      <ProfileContainer>
        <ProfileImage src={profile.image} alt='Profile' />
        <ProfileDetails>
          <ProfileName>{profile.firstName} {profile.lastName}</ProfileName>
          <ProfileInfo>Telegram: {profile.telegram}</ProfileInfo>
          {user && user.id === profile.userId && (
            <div>
              <Button onClick={onHandleDelete} type="button">Удалить</Button>
              <Button type="button" onClick={() => setActive(true)}>Редактировать</Button>
            </div>
          )}
        </ProfileDetails>
      </ProfileContainer>

      {active && (
        <ModalOverlay onClick={() => setActive(false)}>
          <ModalContainer onClick={(e) => e.stopPropagation()}>
            <FormUpdateProfile profile={profile} />
            <Button onClick={() => setActive(false)}>Закрыть</Button>
          </ModalContainer>
        </ModalOverlay>
      )}
    </>
  );
}

export default React.memo(ProfileItem);
