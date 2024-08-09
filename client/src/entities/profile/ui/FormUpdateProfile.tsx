import React, { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Button, TextInput, FileInput, Box, Stack, Avatar } from '@mantine/core';
import { useAppDispatch, useAppSelector } from '../../../app/provider/store/store';
import { updateProfile } from '../profileSlice';
import type { Profile } from '../types/ProfileType';

const schemaProfile = yup
  .object()
  .shape({
    firstName: yup.string().required('Заполните все поля'),
    lastName: yup.string().required('Заполните все поля'),
    telegram: yup.string().required('Заполните все поля'),
    image: yup.mixed(),
  })
  .required();

type FormUpdateProfileProps = {
  profile: Profile;
  handleClose: () => void; // Функция для закрытия формы
};

function FormUpdateProfile({ profile, handleClose }: FormUpdateProfileProps): JSX.Element {
  const dispatch = useAppDispatch();
  const userId = useAppSelector((state) => state.auth.user?.id);
  const [imagePreview, setImagePreview] = useState<string>(profile.image);

  const {
    control,
    handleSubmit,
    setValue,
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

  const onSubmit = async (data: {
    firstName: string;
    lastName: string;
    telegram: string;
    image?: string;
  }): Promise<void> => {
    if (!userId) {
      console.error('User ID is not available');
      return;
    }

    const updatedData = {
      ...data,
      id: profile.id,
      userId,
      image: data.image || '',
    };

    try {
      await dispatch(updateProfile(updatedData)).unwrap();
      handleClose(); // Закрыть форму при успешной отправке
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  const handleImageUpload = async (file: File): Promise<void> => {
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
        setValue('image', `/profilePhoto/${file.name}`);
      };
      reader.readAsDataURL(file);

      const formData = new FormData();
      formData.append('file', file);

      try {
        const response = await fetch('/api/upload', {
          method: 'POST',
          body: formData,
        });
        if (!response.ok) {
          throw new Error('Ошибка загрузки файла');
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  useEffect(() => {
    setValue('image', profile.image);
    setImagePreview(profile.image);
  }, [profile.image, setValue]);

  return (
    <Box
      mx="auto"
      my="xl"
      style={{
        maxWidth: 600,
        padding: '20px',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing="md">
          <Controller
            name="image"
            control={control}
            render={({ field }) => (
              <Box>
                <FileInput
                  label="Загрузить фото"
                  placeholder="Выберите файл"
                  accept="image/*"
                  onChange={(file) => {
                    field.onChange(file);
                    handleImageUpload(file as File);
                  }}
                  error={errors.image?.message}
                />
                {imagePreview && <Avatar src={imagePreview} size={160} radius="xl" mt="md" />}
              </Box>
            )}
          />
          <Controller
            name="firstName"
            control={control}
            render={({ field }) => (
              <TextInput
                label="Имя"
                placeholder="Введите ваше имя"
                {...field}
                error={errors.firstName?.message}
              />
            )}
          />
          <Controller
            name="lastName"
            control={control}
            render={({ field }) => (
              <TextInput
                label="Фамилия"
                placeholder="Введите вашу фамилию"
                {...field}
                error={errors.lastName?.message}
              />
            )}
          />
          <Controller
            name="telegram"
            control={control}
            render={({ field }) => (
              <TextInput
                label="Telegram"
                placeholder="Введите ваш Telegram"
                {...field}
                error={errors.telegram?.message}
              />
            )}
          />
          <Button type="submit" mt="md" variant="filled">
            Обновить профиль
          </Button>
        </Stack>
      </form>
    </Box>
  );
}

export default FormUpdateProfile;
