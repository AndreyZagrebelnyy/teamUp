import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Container, Avatar, TextInput, Button, Group, Text, FileInput } from '@mantine/core';
import { useAppDispatch, useAppSelector } from '../../../app/provider/store/store';
import { addProfile } from '../profileSlice';

const schemaProfile = yup
  .object()
  .shape({
    firstName: yup.string().required('Заполните все поля'),
    lastName: yup.string().required('Заполните все поля'),
    telegram: yup.string().required('Заполните все поля'),
  })
  .required();

function FormAddProfile(): JSX.Element {
  const dispatch = useAppDispatch();
  const userId = useAppSelector((state) => state.auth.user?.id);
  const [imagePreview, setImagePreview] = useState<string>('');

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      telegram: '',
      image: '/profilePhoto/default-prodile-photo.avif',
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
    setImagePreview('/profilePhoto/default-prodile-photo.avif');
  };

  const handleImageUpload = (file: File): void => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result as string);
      setValue('image', `/profilePhoto/${file.name}`);
    };
    reader.readAsDataURL(file);

    const formData = new FormData();
    formData.append('file', file);

    fetch('/api/profile/upload', {
      method: 'POST',
      body: formData,
    }).then((response) => {
      if (!response.ok) {
        console.error('Ошибка загрузки файла');
      } else {
        console.log('Файл успешно загружен');
      }
    });
  };

  return (
    <Container size="xs" padding="md">
      <form onSubmit={handleSubmit(onSubmit)} style={{ marginTop: '1rem' }}>
        <TextInput
          label="Имя"
          placeholder="Введите имя"
          {...register('firstName')}
          error={errors.firstName?.message}
          required
        />
        <TextInput
          label="Фамилия"
          placeholder="Введите фамилию"
          {...register('lastName')}
          error={errors.lastName?.message}
          required
        />
        <TextInput
          label="Telegram"
          placeholder="Введите Telegram"
          {...register('telegram')}
          error={errors.telegram?.message}
          required
        />
        <Button type="submit" style={{ marginTop: '1rem' }}>
          Создать профиль
        </Button>
      </form>
    </Container>
  );
}

export default FormAddProfile;
