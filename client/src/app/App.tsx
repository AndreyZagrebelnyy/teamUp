import React, { useEffect } from 'react';
import './App.css';
import Navbar from '../widgets/navbar/Navbar';
import AppRoutes from './provider/routes/AppRoutes';
import { useAppDispatch } from './provider/store/store';
import { getAllArenas } from '../entities/arena/ArenaSlice';
import { tokensRefresh } from '../entities/user/authSlice';
import { getAllEvents } from '../entities/event/eventSlice';
import { getAllSports } from '../entities/sports/sportSlice';
import Footer from '../widgets/footer/Footer'; 

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(getAllArenas());
    void dispatch(getAllEvents());
    void dispatch(tokensRefresh());
    void dispatch(getAllSports());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <AppRoutes />
      <Footer /> 
    </>
  );
}

export default App;
