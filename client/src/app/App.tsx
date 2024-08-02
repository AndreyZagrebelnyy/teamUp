import React, { useEffect } from 'react';
import './App.css';
import Navbar from '../widgets/navbar/Navbar';
import AppRoutes from './provider/routes/AppRoutes';
import { useAppDispatch } from './provider/store/store';
import { tokensRefresh } from '../entities/user/authSlice';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(tokensRefresh());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <AppRoutes />
    </>
  );
}

export default App;
