import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ArenasPage from '../../../page/arenas/ArenasPage';
import MainPage from '../../../page/main/MainPage';
import RegistrationPage from '../../../page/authPages/RegistrationPage';
import AuthorizationPage from '../../../page/authPages/AuthorizationPage';
import AdminPanel from '../../../page/admin/AdminPage';

import EventsPage from '../../../page/events/EventsPage';
// import EventsPage from '../../../page/events/EventsPage';

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
      </Routes>
    </div>
  );
}

export default AppRoutes;
