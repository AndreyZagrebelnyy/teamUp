import React, { useEffect, useRef, useState } from 'react';
import type { RootState } from '@reduxjs/toolkit/query';
import { useAppDispatch, useAppSelector } from '../../../../../app/provider/store/store';
import ArenaAddForm from '../../../../../entities/arena/ui/ArenaAddForm';
import type { ArenaWithMetroStation } from '../../../../../entities/arena/types/ArenaType';
import AdminArenasItem from './AdminArenasItem';
import './AdminPage.css';
import { ClosedCaptionAltIcon, ClosedCaptionIcon, LogoutSquare01Icon } from 'hugeicons-react';

function AdminArenas(): JSX.Element {
  const { arenas, errors } = useAppSelector((store: RootState) => store.arenas);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null); // Create a ref for the modal

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Close modal when clicking outside of it
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
          arenas.map((arena: ArenaWithMetroStation) => (
            <AdminArenasItem key={arena.id} arena={arena} />
          ))}
      </div>
      <span>{errors}</span>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content" ref={modalRef}>
            <LogoutSquare01Icon className="close" onClick={closeModal} />
            <ArenaAddForm closeModal={closeModal} />
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminArenas;
