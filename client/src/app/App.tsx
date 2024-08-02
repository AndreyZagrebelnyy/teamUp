import React, { useEffect } from 'react';
import './App.css';
import Navbar from '../widgets/navbar/Navbar';
import AppRoutes from './provider/routes/AppRoutes';
import { useAppDispatch } from './provider/store/store';
import { getAllArenas } from '../entities/arena/ArenaSlice';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(getAllArenas());
  }, []);
  
  return (
    <>
      <Navbar />
      <AppRoutes />
    </>
  );
}

export default App;
