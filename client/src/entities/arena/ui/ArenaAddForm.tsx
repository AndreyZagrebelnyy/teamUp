import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import './ArenaAddForm.css';
import { ArenaWithoutIdAndUserId } from '../types/ArenaType';
import { addArena } from '../ArenaSlice';
import { useAppDispatch } from '../../../app/provider/store/store';

type Inputs = ArenaWithoutIdAndUserId;

const schema = yup
  .object()
  .shape({
    title: yup.string().required(),
    description: yup.string().required(),
    country: yup.string().required(),
    city: yup.string().required(),
    street: yup.string().required(),
    building: yup.string().required(),
    coordX: yup.number().required(),
    coordY: yup.number().required(),
    metroStationId: yup.number().required(),
  })
  .required();

type ArenaAddFormProps = {};

const ArenaAddForm = ({}: ArenaAddFormProps): JSX.Element => {

	const dispatch = useAppDispatch()
  const { register, handleSubmit } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit((d) => {
		console.log(d)
		void dispatch(addArena(d))
		})}>

      <input type="text" placeholder='Название'{...register('title')} />
      <input type="text" placeholder='Описание'{...register('description')} />
      <input type="text" placeholder='Страна'{...register('country')} />
      <input type="text" placeholder='Город'{...register('city')} />
      <input type="text" placeholder='Улица/проспект/переулок'{...register('street')} />
      <input type="number" placeholder='Здание/строение/корпус'{...register('building')} />
      <input type="number" placeholder='Коорд X'{...register('coordX')} />
      <input type="number" placeholder='Коорд Y'{...register('coordY')} />
      <input type="number" placeholder='Станция метро'{...register('metroStationId')} />
      <input type="submit" />
    </form>
  );
};

export default ArenaAddForm;
