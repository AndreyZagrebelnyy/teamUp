import React from 'react';
import AdminArenas from './components/arenas/ui/AdminArenas';
import './components/AdminCss.css';

function AdminPage(): JSX.Element {
  return (
    <div className="arenas-container">
      <div className="arenas-title">
        <h1>АДМИН ПАНЕЛЬ</h1>
      </div>
      <AdminArenas />
      <div />
    </div>
  );
}

export default AdminPage;
