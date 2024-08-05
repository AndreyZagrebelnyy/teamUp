// App.js or App.tsx
import React, { useEffect } from 'react';
import './App.css';
import { MantineProvider } from '@mantine/core';
import Navbar from '../widgets/navbar/Navbar';
import AppRoutes from './provider/routes/AppRoutes';
import { useAppDispatch } from './provider/store/store';
import { getAllArenas, getAllFavouriteArenas } from '../entities/arena/ArenaSlice';
import { tokensRefresh } from '../entities/user/authSlice';
import { getAllEvents } from '../entities/event/eventSlice';
import { getAllSports } from '../entities/sports/sportSlice';
import { getAllMetro } from '../entities/metroStation/MetroSlice';
import Footer from '../widgets/footer/Footer';
import { getAllProfiles } from '../entities/profile/profileSlice';
import { getAllLevels } from '../entities/level/levelSlice';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(getAllArenas());
    void dispatch(getAllFavouriteArenas());
    void dispatch(getAllEvents());
    void dispatch(tokensRefresh());
    void dispatch(getAllSports());
    void dispatch(getAllMetro());
    void dispatch(getAllProfiles());
    void dispatch(getAllLevels());
  }, [dispatch]);

  return (
    <div className="app-container">
      <MantineProvider>
        <Navbar />
        <div className="content">
          <AppRoutes />
        </div>
      </MantineProvider>
      <Footer />
    </div>
  );
}

export default App;
