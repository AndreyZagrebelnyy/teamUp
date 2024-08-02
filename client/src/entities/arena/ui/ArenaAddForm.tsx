import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import './ArenaAddForm.css';

type Inputs = {
  title: string;
  description: string;
  country: string;
  city: string;
  street: string;
  building: string;
  coordX: number;
  coordY: number;
  metroStationId: number;
};

const schema = yup
  .object()
  .shape({
    title: yup.string().required(),
    description: yup.string().required(),
    country: yup.string().required(),
    city: yup.string().required(),
    street: yup.string().required(),
    building: yup.string().required(),
  })
  .required();

type ArenaAddFormProps = {};

const ArenaAddForm = ({}: ArenaAddFormProps): JSX.Element => {
  const { register, handleSubmit } = useForm<Inputs>({
   //  resolver: yupResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit((d) => console.log(d))}>
      <input type="text" {...register('title')} />
      <input type="number" {...register('description')} />
      <input type="submit" />
    </form>
  );
};

export default ArenaAddForm;
