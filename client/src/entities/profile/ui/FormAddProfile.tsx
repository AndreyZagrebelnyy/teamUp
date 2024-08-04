import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useAppDispatch, useAppSelector } from '../../../app/provider/store/store';
import { addProfile } from '../profileSlice';

const schemaProfile = yup
  .object()
  .shape({
    firstName: yup.string().required('Заполните все поля'),
    lastName: yup.string().required('Заполните все поля'),
    telegram: yup.string().required('Заполните все поля'),
    image: yup.string().required('Заполните все поля'),
  })
  .required();

function FormAddProfile(): JSX.Element {
  const dispatch = useAppDispatch();
  const userId = useAppSelector((state) => state.auth.user?.id);

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
    resolver: yupResolver(schemaProfile),
  });

  const onSubmit = (data: {
    firstName: string;
    lastName: string;
    telegram: string;
    image: string;
  }): void => {
    if (!userId) {
      console.error('User ID is not available');
      return;
    }
    void dispatch(addProfile({ ...data, userId }));
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
        Telegram
        <input type="text" {...register('telegram')} />
        <span>{errors.telegram?.message}</span>
      </label>
      <label htmlFor="image">
        Изображение
        <input type="text" {...register('image')} />
        <span>{errors.image?.message}</span>
      </label>
      <button type="submit">Создать профиль</button>
    </form>
  );
}

export default FormAddProfile;
