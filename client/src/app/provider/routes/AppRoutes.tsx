import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ArenasPage from '../../../page/arenas/ArenasPage';
import MainPage from '../../../page/main/MainPage';
import RegistrationPage from '../../../page/AuthPages/RegistrationPage';
import AuthorizationPage from '../../../page/AuthPages/AuthorizationPage';
// import EventsPage from '../../../page/events/EventsPage';

function AppRoutes(): JSX.Element {
  return (
    <div className="AppRoutes">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/arenas" element={<ArenasPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/authorization" element={<AuthorizationPage />} />
      </Routes>
    </div>
  );
}

export default AppRoutes;
