/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/no-misused-promises */
import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { object, ref, string } from 'yup';

import { useNavigate } from 'react-router-dom';
import { registration } from '../../entities/user/authSlice';
import './styles/auth.css';
import { useAppDispatch } from '../../app/provider/store/store';

const schema = object().shape({

  email: string().email().nullable().trim().required('Не email'),
  password: string()
    .trim()
    .required('Необходимо указать пароль')
    .min(5, 'пароль жолжен быть не менее 5 символов ')
    .max(20, 'пароль должен быть не более 20 символов'),
  cpassword: string()
    .trim()
    .required('Необходимо повторить пароль')
    .min(5, 'пароль жолжен быть не менее 5 символов ')
    .max(20, 'пароль должен быть не более 20 символов')
    .oneOf([ref('password')], 'Пароли не совпадают'),
});

function RegistrationPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onHadleSubmit = async (user): Promise<void> => {
    void dispatch(registration({ email: user.email, password: user.password }));
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit(onHadleSubmit)}>
      <label htmlFor="email">
        Email:
        <input type="email" {...register('email')} />
        <span>{errors.email?.message}</span>
      </label>
      <br />
      <label htmlFor="password">
        Password:
        <input type="password" {...register('password')} />
        <span>{errors.password?.message}</span>
      </label>
      <br />
      <label htmlFor="cpassword">
        Check password:
        <input type="password" {...register('cpassword')} />
        <span>{errors.cpassword?.message}</span>
      </label>
      <br />
      <div className="button-container">
        <button type="submit">sign-up</button>
      </div>
    </form>
  );
}

export default RegistrationPage;
