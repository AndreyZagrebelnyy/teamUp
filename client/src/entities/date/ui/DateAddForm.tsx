import React, { useState } from 'react';
import { DateTimePicker } from '@mantine/dates';
import type { ArenaId } from '../../arena/types/ArenaType';
import { useAppDispatch } from '../../../app/provider/store/store';
import { addDate } from '../DateSlice';

type DateAddFormProps = {
  arenaId: ArenaId;
  onClose: () => void; // Добавьте этот пропс
};

function DateAddForm({ arenaId, onClose }: DateAddFormProps): JSX.Element {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const dispatch = useAppDispatch();

  const addDates = (e: React.FormEvent) => {
    e.preventDefault();
    if (startDate && endDate) {
      const form = {
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        arenaId,
      };

      void dispatch(addDate(form)).then(() => {
        onClose(); // Закрытие модального окна после успешного добавления
      });
    }
  };

  return (
    <form onSubmit={addDates}>
      <DateTimePicker
        value={startDate}
        onChange={setStartDate}
        label="Начало события"
        placeholder="Выберите дату и время начала"
        required
      />
      <DateTimePicker
        value={endDate}
        onChange={setEndDate}
        label="Окончание события"
        placeholder="Выберите дату и время окончания"
        required
      />
      <button type="submit">ОТПРАВИТЬ</button>
    </form>
  );
}

export default DateAddForm;