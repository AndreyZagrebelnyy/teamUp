

import { Modal, Button } from '@mantine/core';
import React, { useEffect, useRef, useState } from 'react';
import { RootState, useAppSelector } from '../../../../../app/provider/store/store';
import ArenaAddForm from '../../../../../entities/arena/ui/ArenaAddForm';
import type { ArenaWithMetroStation } from '../../../../../entities/arena/types/ArenaType';
import AdminArenasItem from './AdminArenasItem';
import { RootState } from '@reduxjs/toolkit/query';
import { useAppSelector } from '../../../../../app/provider/store/store';
import './AdminPage.css';
import { LogoutSquare01Icon } from 'hugeicons-react';


function AdminArenas(): JSX.Element {
  const { arenas, errors } = useAppSelector((store: RootState) => store.arenas);
  const metro = useAppSelector((store: RootState) => store.metro.metro);
  console.log(111111111111, metro);

  const [isModalOpen, setIsModalOpen] = useState(false);


  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="arenas-container">
      <div className="button-container">
        <Button onClick={openModal}>Добавить площадку</Button>
      </div>
      <h1 className="ArenasPage">Площадки</h1>
      <div className="arenas-card-container">
        {arenas &&
          arenas.map((arena: ArenaWithMetroStation) => (
            <AdminArenasItem key={arena.id} arena={arena} />
          ))}
      </div>
      <span>{errors}</span>


      <Modal
        opened={isModalOpen}
        onClose={closeModal}
        title="Добавление площадки"
        centered
      >
        <ArenaAddForm closeModal={closeModal} />
      </Modal>

    </div>
  );
}

export default AdminArenas;
