import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { useAppDispatch } from '../../../app/provider/store/store';
import { addProfile } from '../profileSlice';

const schemaProfile = yup
  .object()
  .shape({
    firstName: yup.string().required('заполните все поля'),
    lastName: yup.string().required('заполните все поля'),
    telegram: yup.string().required('заполните все поля'),
    image: yup.string().required('заполните все поля'),
  })
  .required();

function FormAddProfile(): JSX.Element {
  const dispatch = useAppDispatch();
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
        firstName: '',
        lastName: '',
        telegram: '',
        image: '',
    },
    resolver: yupResolver(schemaProfile), // yup, joi and even your own.
  });

  const onSubmit = (profile: { firstName: string; lastName: string; telegram: string; image: string }): void => {
    void dispatch(addProfile(profile));
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <label htmlFor="firstName">
        Имя
        <input type="text" {...register('firstName')} />
        <span>{errors.firstName?.message}</span>
      </label>
      <label htmlFor="lastName">
        Фамилия
        <input type="text" {...register('lastName')} />
        <span>{errors.lastName?.message}</span>
      </label>
      <label htmlFor="telegram">
      telegram
        <input type="text" {...register('telegram')} />
        <span>{errors.telegram?.message}</span>
      </label>
      <label htmlFor="image">
      image
        <input type="text" {...register('image')} />
        <span>{errors.image?.message}</span>
      </label>
      <button type="submit">add</button>
    </form>
  );
}

export default FormAddProfile;