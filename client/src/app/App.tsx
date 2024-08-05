import React, { useEffect } from 'react';
import './App.css';
import { MantineProvider } from '@mantine/core';
import Navbar from '../widgets/navbar/Navbar';
import AppRoutes from './provider/routes/AppRoutes';
import { useAppDispatch } from './provider/store/store';
import { getAllArenas } from '../entities/arena/ArenaSlice';
import { tokensRefresh } from '../entities/user/authSlice';
import { getAllEvents } from '../entities/event/eventSlice';
import { getAllSports } from '../entities/sports/sportSlice';
import { getAllMetro } from '../entities/metroStation/MetroSlice';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(getAllArenas());
    void dispatch(getAllEvents());
    void dispatch(tokensRefresh());
    void dispatch(getAllSports());
    void dispatch(getAllMetro());
  }, [dispatch]);

  return (
    <MantineProvider>
      <Navbar />
      <AppRoutes />
    </MantineProvider>
  );
}

export default App;
