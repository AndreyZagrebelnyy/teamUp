/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/no-misused-promises */

import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { object, string } from 'yup';
import { useNavigate } from 'react-router-dom';
import { authorization } from '../../entities/user/authSlice';
import { useAppDispatch } from '../../app/provider/store/store';
import { Container, TextInput, PasswordInput, Button, Paper, Title, Center } from '@mantine/core';
import './styles/auth.css';

const schema = object().shape({
  email: string().email().nullable().trim().required('Не email'),
  password: string()
    .trim()
    .required('Необходимо указать пароль')
    .min(5, 'Пароль должен быть не менее 5 символов')
    .max(20, 'Пароль должен быть не более 20 символов'),
});

function AuthorizationPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onHadleSubmit = async (data: { email: string; password: string }): Promise<void> => {
    void dispatch(authorization({ email: data.email, password: data.password }));
    navigate('/');
  };

  return (
    <Container size={420} my={40}>
      <Paper radius="md" p="xl" withBorder>
        <Title order={2} align="center" mb="lg">
          Войти в аккаунт
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
          <Center mt="xl">
            <Button type="submit">Войти</Button>
          </Center>
        </form>
      </Paper>
    </Container>
  );
}

export default AuthorizationPage;
