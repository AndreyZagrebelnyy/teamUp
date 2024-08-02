// src/pages/ProfilePage.tsx

import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/provider/store/store';
import { fetchProfile } from '../../entities/profile/profileSlice';

const ProfilePage: React.FC = () => {
    const dispatch = useAppDispatch();
    const profile = useAppSelector(state => state.profile);

    useEffect(() => {
        dispatch(fetchProfile()); // Загрузка профиля при монтировании компонента
    }, [dispatch]);

    return (
        <div style={{ display: 'flex', height: '100vh' }}>
            <div style={{ width: '33%', padding: '20px', boxSizing: 'border-box' }}>
                <img 
                    src={profile.image || 'default-avatar.png'} 
                    alt="Profile Avatar" 
                    style={{ width: '100%', height: 'auto', borderRadius: '50%' }}
                />
            </div>
            <div style={{ width: '33%', padding: '20px', boxSizing: 'border-box', textAlign: 'right' }}>
                <h2>{profile.firstName || 'Имя'}</h2>
                <h2>{profile.lastName || 'Фамилия'}</h2>
                <h3>{profile.telegram || 'Telegram'}</h3>
            </div>
        </div>
    );
};

export default ProfilePage;
