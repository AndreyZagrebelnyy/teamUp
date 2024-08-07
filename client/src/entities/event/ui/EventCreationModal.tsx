import React, { useState } from 'react';
import { Modal, Text, Select, TextInput, Button } from '@mantine/core';
import { useAppDispatch, useAppSelector } from '../../../app/provider/store/store';
import { createEvent } from '../eventSlice';
import type { ArenaWithMetroStation } from '../../arena/types/ArenaType';

type EventCreationModalProps = {
  arena: ArenaWithMetroStation;
  selectedDateId: number | null;
  setModalOpen: (isOpen: boolean) => void;
  modalOpen: boolean;
};

function EventCreationModal({
  arena,
  selectedDateId,
  setModalOpen,
  modalOpen,
}: EventCreationModalProps): JSX.Element {
  const dispatch = useAppDispatch();
  const [sport, setSport] = useState('');
  const [levels, setLevel] = useState('');
  const [teamSize, setTeamSize] = useState<number | ''>('');
  const sports = useAppSelector((store) => store.sports.sports);
  const level = useAppSelector((store) => store.level.levels);

  const handleCreateEvent = () => {
    if (sport && teamSize && selectedDateId !== null) {
      void dispatch(
        createEvent({
          arenaId: arena.id,
          sportId: parseInt(sport),
          teamSize: parseInt(teamSize as unknown as string),
          arenaDateId: selectedDateId,
          levelId: parseInt(levels),
        }),
        
      );
      setModalOpen(false); // Close the modal after creating the event
    } else {
      // Show error or message
    }
  };

  return (
    <Modal opened={modalOpen} onClose={() => setModalOpen(false)} title="Создать событие">
      <Text>Заполните форму для создания события:</Text>
      <Select
        label="Вид спорта"
        placeholder="Выберите вид спорта"
        data={sports.map((s) => ({ value: s.id.toString(), label: s.title }))}
        value={sport}
        onChange={setSport}
      />
      <Select
        label="Уровень сложности"
        placeholder="Выберите уровень"
        data={level.map((s) => ({ value: s.id.toString(), label: s.title }))}
        value={levels}
        onChange={setLevel}
      />
      <TextInput
        label="Количество игроков"
        placeholder="Введите количество игроков"
        type="number"
        value={teamSize}
        onChange={(e) => setTeamSize(e.target.value)}
      />
      <Button onClick={handleCreateEvent}>Создать событие</Button>
      <Button onClick={() => setModalOpen(false)} color="gray">
        Отмена
      </Button>
    </Modal>
  );
}

export default EventCreationModal;
