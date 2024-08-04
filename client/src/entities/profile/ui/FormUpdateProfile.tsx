import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useAppDispatch } from '../../../app/provider/store/store';
import { updateProfile } from '../profileSlice';
import type { Profile } from '../types/ProfileType';

const schemaProfile = yup
  .object()
  .shape({
    firstName: yup.string().required('Заполните все поля'),
    lastName: yup.string().required('Заполните все поля'),
    telegram: yup.string().required('Заполните все поля'),
    image: yup.string().required('Заполните все поля'),
  })
  .required();

type FormUpdateProfileProps = {
  profile: Profile;
};

function FormUpdateProfile({ profile }: FormUpdateProfileProps): JSX.Element {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: profile.firstName,
      lastName: profile.lastName,
      telegram: profile.telegram,
      image: profile.image,
    },
    resolver: yupResolver(schemaProfile),
  });

  const onSubmit = (data: {
    firstName: string;
    lastName: string;
    telegram: string;
    image: string;
  }): void => {
    void dispatch(updateProfile({ ...data, id: profile.id, userId: profile.userId }));
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
      <button type="submit">Обновить профиль</button>
    </form>
  );
}

export default FormUpdateProfile;

