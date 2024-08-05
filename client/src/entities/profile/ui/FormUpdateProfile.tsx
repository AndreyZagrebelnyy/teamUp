import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../../app/provider/store/store';
import { updateProfile } from '../profileSlice';
import { Profile } from '../profileTypes';

// Styled Components
const FormContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin: 20px;
`;

const FormImage = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 20px;
`;

const ImagePreview = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  margin-bottom: 10px;
  border-radius: 50%;
  border: 2px solid #ccc;
`;

const UploadButton = styled.button`
  padding: 10px 15px;
  background-color: #4CAF50;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

const FormFields = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 15px;
`;

const Input = styled.input`
  padding: 8px;
  width: 100%;
  box-sizing: border-box;
`;

const Button = styled.button`
  padding: 10px 15px;
  background-color: #4CAF50;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

// Validation Schema
const schemaProfile = yup
  .object()
  .shape({
    firstName: yup.string().required('Заполните все поля'),
    lastName: yup.string().required('Заполните все поля'),
    telegram: yup.string().required('Заполните все поля'),
  })
  .required();

interface FormUpdateProfileProps {
  profile: Profile;
}

function FormUpdateProfile({ profile }: FormUpdateProfileProps): JSX.Element {
  const dispatch = useAppDispatch();
  const userId = useAppSelector((state) => state.auth.user?.id);
  const [imagePreview, setImagePreview] = useState<string>(profile.image);

  const {
    register,
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
    void dispatch(updateProfile({ ...data, userId }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
        setValue('image', `/profilePhoto/${file.name}`);
       
      };
      reader.readAsDataURL(file);

      const formData = new FormData();
      formData.append('file', file);

      fetch('/api/upload', {
        method: 'POST',
        body: formData,
      }).then((response) => {
        if (!response.ok) {
          console.error('Ошибка загрузки файла');
        }
      });
    }
  };

  useEffect(() => {
    setValue('image', profile.image);
    setImagePreview(profile.image);
  }, [profile.image, setValue]);

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <FormImage>
        <ImagePreview src={imagePreview} alt="Profile Preview" />
        <UploadButton type="button" onClick={() => document.getElementById('imageUpload').click()}>
          Загрузить фото
        </UploadButton>
        <input
          id="imageUpload"
          type="file"
          style={{ display: 'none' }}
          accept="image/*"
          onChange={handleImageUpload}
        />
        <span>{errors.image?.message}</span>
      </FormImage>

      <FormFields>
        <Label htmlFor="firstName">
          Имя
          <Input type="text" {...register('firstName')} />
          <span>{errors.firstName?.message}</span>
        </Label>
        <Label htmlFor="lastName">
          Фамилия
          <Input type="text" {...register('lastName')} />
          <span>{errors.lastName?.message}</span>
        </Label>
        <Label htmlFor="telegram">
          Telegram
          <Input type="text" {...register('telegram')} />
          <span>{errors.telegram?.message}</span>
        </Label>
        <Button type="submit">Обновить профиль</Button>
      </FormFields>
    </FormContainer>
  );
}

export default FormUpdateProfile;




// import React from 'react';
// import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from 'yup';
// import axios from 'axios';
// import { useAppDispatch } from '../../../app/provider/store/store';
// import { updateProfile } from '../profileSlice';
// import type { Profile } from '../types/ProfileType';
// import styled from 'styled-components';

// const schemaProfile = yup.object().shape({
//   firstName: yup.string().required('Заполните все поля'),
//   lastName: yup.string().required('Заполните все поля'),
//   telegram: yup.string().required('Заполните все поля'),
//   image: yup.mixed().required('Заполните все поля'),
// }).required();

// type FormUpdateProfileProps = {
//   profile: Profile;
// };

// function FormUpdateProfile({ profile }: FormUpdateProfileProps): JSX.Element {
//   const dispatch = useAppDispatch();
//   const { register, handleSubmit, reset, formState: { errors } } = useForm({
//     defaultValues: {
//       firstName: profile.firstName,
//       lastName: profile.lastName,
//       telegram: profile.telegram,
//       image: null, // Для файла
//     },
//     resolver: yupResolver(schemaProfile),
//   });

//   const onSubmit = async (data: { firstName: string; lastName: string; telegram: string; image: FileList }): Promise<void> => {
//     try {
//       // Загрузка изображения на сервер
//       const formData = new FormData();
//       formData.append('image', data.image[0]);

//       const uploadResponse = await axios.post('http://localhost:3000/api/upload', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       // После загрузки изображения обновляем профиль с использованием пути к изображению
//       const updatedProfile = {
//         ...data,
//         id: profile.id,
//         userId: profile.userId,
//         image: uploadResponse.data.filename, // Имя файла, сохраненного на сервере
//       };

//       await dispatch(updateProfile(updatedProfile));
//       reset();
//     } catch (error) {
//       console.error('Ошибка загрузки файла или обновления профиля', error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//       <label htmlFor="firstName">
//         Имя
//         <input type="text" {...register('firstName')} />
//         <span>{errors.firstName?.message}</span>
//       </label>
//       <label htmlFor="lastName">
//         Фамилия
//         <input type="text" {...register('lastName')} />
//         <span>{errors.lastName?.message}</span>
//       </label>
//       <label htmlFor="telegram">
//         Telegram
//         <input type="text" {...register('telegram')} />
//         <span>{errors.telegram?.message}</span>
//       </label>
//       <label htmlFor="image">
//         Изображение
//         <input type="file" {...register('image')} />
//         <span>{errors.image?.message}</span>
//       </label>
//       <button type="submit">Обновить профиль</button>
//     </form>
//   );
// }

// export default FormUpdateProfile;
