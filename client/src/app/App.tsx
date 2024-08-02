import React from 'react';
import './App.css';
import Navbar from '../widgets/navbar/Navbar';
import AppRoutes from './provider/routes/AppRoutes';

function App(): JSX.Element {
  return (
    <>
      <Navbar />
      <AppRoutes />
    </>
  );
}

export default App;
