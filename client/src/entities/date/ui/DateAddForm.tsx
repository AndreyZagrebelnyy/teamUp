import React, { useState } from 'react';
import { DateTimePicker } from '@mantine/dates';
import { useAppDispatch } from '../../../app/provider/store/store';
import { addDate } from '../DateSlice';

type DateAddFormProps = {
  arenaId: string;
};

function DateAddForm({ arenaId }: DateAddFormProps): JSX.Element {
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

      void dispatch(addDate(form));
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
