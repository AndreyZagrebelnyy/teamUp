import React, { useEffect } from 'react';
import './App.css';
import Navbar from '../widgets/navbar/Navbar';
import AppRoutes from './provider/routes/AppRoutes';
import { useAppDispatch } from './provider/store/store';
import { getAllArenas } from '../entities/arena/ArenaSlice';
import { tokensRefresh } from '../entities/user/authSlice';
import { getAllEvents } from '../entities/event/eventSlice';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(getAllArenas());
    void dispatch(getAllEvents());
    void dispatch(tokensRefresh());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <AppRoutes />
    </>
  );
}

export default App;
