import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { useAppDispatch } from '../../../app/provider/store/store';
import { updateProfile } from '../profileSlice';
import type { Profile } from '../types/ProfileType';

const schemaProfile = yup
  .object()
  .shape({
    firstName: yup.string().required('заполните все поля'),
    lastName: yup.string().required('заполните все поля'),
    telegram: yup.string().required('заполните все поля'),
    image: yup.string().required('заполните все поля'),
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
    resolver: yupResolver(schemaProfile), // yup, joi and even your own.
  });

  const onSubmit = (data: { firstName: string; lastName: string; telegram: string; image: string; userId: number }): void => {
    void dispatch(updateProfile({ ...data, id: profile.id }));
    reset();
  };
  

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <label htmlFor="title">
        title
        <input type="text" {...register('title')} />
        <span>{errors.title?.message}</span>
      </label>
      <label htmlFor="year">
        year
        <input type="number" {...register('year')} />
        <span>{errors.year?.message}</span>
      </label>
      <label htmlFor="director">
        director
        <input type="text" {...register('director')} />
        <span>{errors.director?.message}</span>
      </label>
      <button type="submit">add</button>
    </form>
  );
}

export default FormUpdateProfile;
