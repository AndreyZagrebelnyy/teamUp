import { Modal, Button } from '@mantine/core';
import React, { useEffect, useRef, useState } from 'react';
import type { RootState } from '../../../../../app/provider/store/store';
import { useAppSelector } from '../../../../../app/provider/store/store';
import ArenaAddForm from '../../../../../entities/arena/ui/ArenaAddForm';
import type { ArenaWithMetroStation } from '../../../../../entities/arena/types/ArenaType';
import AdminArenasItem from './AdminArenasItem';
import './AdminPage.css';

function AdminArenas(): JSX.Element {
	const dates = useAppSelector((store) => store.date.date)
  const arenas = useAppSelector((store: RootState) => store.arenas.arenas);
  const metro = useAppSelector((store: RootState) => store.metro.metro);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        closeModal();
      }
    };
    if (isModalOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isModalOpen]);
  return (
    <div className="arenas-container">
      <div className="button-container">
        <button onClick={openModal}>Добавить площадку</button>

      </div>
      <h1 className="ArenasPage">Площадки</h1>
      <div className="arenas-card-container">
        {arenas &&
          arenas.map((arena: ArenaWithMetroStation) => {
            return <AdminArenasItem key={arena.id} arena={arena} dates = {dates}/>;
          })}
      </div>

      <Modal opened={isModalOpen} onClose={closeModal} title="Добавление площадки" centered>
        <ArenaAddForm closeModal={closeModal} metro={metro} />
      </Modal>
    </div>
  );
}

export default AdminArenas;
