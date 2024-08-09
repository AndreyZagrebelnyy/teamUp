/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/no-misused-promises */

import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { object, ref, string } from 'yup';
import { useNavigate } from 'react-router-dom';
import { registration } from '../../entities/user/authSlice';
import { useAppDispatch } from '../../app/provider/store/store';
import { Container, TextInput, PasswordInput, Button, Paper, Title, Center } from '@mantine/core';
import type { UserRegistrationForm } from '../../entities/user/types/userType';
import './styles/auth.css';

const schema = object().shape({
  email: string()
    .email('Введите действительный email')
    .required('Необходимо указать email')
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Введите действительный email'),
  password: string()
    .trim()
    .required('Необходимо указать пароль')
    .min(5, 'Пароль должен быть не менее 5 символов')
    .max(20, 'Пароль должен быть не более 20 символов'),
  cpassword: string()
    .trim()
    .required('Необходимо повторить пароль')
    .min(5, 'Пароль должен быть не менее 5 символов')
    .max(20, 'Пароль должен быть не более 20 символов')
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

  const onHadleSubmit = async (user: UserRegistrationForm): Promise<void> => {
    void dispatch(registration({ email: user.email, password: user.password }));
    navigate('/');
  };

  return (
    <Container size={420} my={40}>
      <Paper radius="md" p="xl" withBorder>
        <Title order={2} align="center" mb="lg">
          Регистрация
        </Title>
        <form onSubmit={handleSubmit(onHadleSubmit)}>
          <TextInput
            label="Email"
            placeholder="Введите ваш email"
            {...register('email')}
            error={errors.email?.message}
            required
          />
          <PasswordInput
            label="Пароль"
            placeholder="Введите ваш пароль"
            {...register('password')}
            error={errors.password?.message}
            required
            mt="md"
          />
          <PasswordInput
            label="Повторите пароль"
            placeholder="Повторите ваш пароль"
            {...register('cpassword')}
            error={errors.cpassword?.message}
            required
            mt="md"
          />
          <Center mt="xl">
            <Button type="submit">Зарегистрироваться</Button>
          </Center>
        </form>
      </Paper>
    </Container>
  );
}

export default RegistrationPage;
