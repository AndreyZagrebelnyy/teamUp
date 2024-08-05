import React, { useEffect, useState } from 'react';
import { Calendar, DatePicker, DatePickerInput, DatesProvider, TimeInput } from '@mantine/dates';
import type { Arena, ArenaId } from '../../arena/types/ArenaType';
import { useAppDispatch } from '../../../app/provider/store/store';
import { addDate } from '../DateSlice';


function DateAddForm({ arenaId }: ArenaId): JSX.Element {
  const [date, setDate] = useState(new Date().toLocaleDateString());
  const [form, setForm] = useState({
    startDate: '',
    endDate: '',
    arenaId,
  });
  const dispatch = useAppDispatch();

  const addDates = (e) => {
    e.preventDefault();
    void dispatch(addDate(form));
  };
  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: `${date} ${value}`,
    }));
  };

  useEffect(() => {}, [dispatch]);

  return (
    <form onSubmit={(e) => addDates(e)}>
      <TimeInput name="startDate" onChange={onChangeInput} />
      <TimeInput name="endDate" onChange={onChangeInput} />
      <input name="" type="date" onChange={(e) => setDate(e.target.value)} />
      <button type="submit">ОТПРАВИТЬ</button>
    </form>
  );
}

export default DateAddForm;
