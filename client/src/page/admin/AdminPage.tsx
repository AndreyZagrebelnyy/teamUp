import React from 'react';
import AdminArenas from './components/arenas/ui/AdminArenas';

function AdminPage(): JSX.Element {
  return (
    <div className="arenas-container">
      <h1>АДМИН ПАНЕЛЬ</h1>
      <AdminArenas />
      <div>
        <h1> Заявки на игру</h1>
      </div>
    </div>
  );
}

export default AdminPage;
