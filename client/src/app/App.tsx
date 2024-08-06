import React, { useEffect } from 'react';
import { MantineProvider } from '@mantine/core';
import Navbar from '../widgets/navbar/Navbar';
import AppRoutes from './provider/routes/AppRoutes';
import { useAppDispatch } from './provider/store/store';
import { getAllArenas } from '../entities/arena/ArenaSlice';
import { tokensRefresh } from '../entities/user/authSlice';
import { getAllEvents } from '../entities/event/eventSlice';
import { getAllSports } from '../entities/sports/sportSlice';
import { getAllMetro } from '../entities/metroStation/MetroSlice';
import Footer from '../widgets/footer/Footer';
import { getAllProfiles } from '../entities/profile/profileSlice';
import { getAllLevels } from '../entities/level/levelSlice';
import ErrorBoundary from './ErrorrBoundary';
import { getAllUserEvents } from '../entities/userEvent/userEventSlice';
import './App.css';


function App(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(getAllArenas());
    void dispatch(getAllEvents());
    void dispatch(tokensRefresh());
    void dispatch(getAllSports());
    void dispatch(getAllMetro());
    void dispatch(getAllProfiles());
    void dispatch(getAllLevels());
    void dispatch(getAllUserEvents());
  }, [dispatch]);

  return (
    <MantineProvider>
      <ErrorBoundary>
        <div className="app">
          <Navbar />
          <div className="app-container">
            <AppRoutes />
          </div>
          <Footer />
        </div>
      </ErrorBoundary>
    </MantineProvider>
  );
}

export default App;
