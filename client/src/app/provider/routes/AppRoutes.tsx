import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ArenasPage from '../../../page/arenas/ArenasPage';
import MainPage from '../../../page/main/MainPage';
import AdminPanel from '../../../page/admin/AdminPage';

import EventsPage from '../../../page/events/EventsPage';
import ProfilePage from '../../../page/profile/ProfilePage';
import AuthorizationPage from '../../../page/AuthPages/AuthorizationPage';
import RegistrationPage from '../../../page/AuthPages/RegistrationPage';


function AppRoutes(): JSX.Element {
  return (
    <div className="AppRoutes">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/arenas" element={<ArenasPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/authorization" element={<AuthorizationPage />} />
        <Route path="/admin_panel" element={<AdminPanel />} />
        <Route path="/*" element={404} />
        <Route path="/profile" element={<ProfilePage />} />

      </Routes>
    </div>
  );
}

export default AppRoutes;
