import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import type { ArenaWithoutIdAndCreatorId } from '../types/ArenaType';
import { addArena } from '../ArenaSlice';
import { useAppDispatch } from '../../../app/provider/store/store';
import './ArenaAddForm.css';
import { MetroStation } from '../../metroStation/types/MetroStationType';

type Inputs = ArenaWithoutIdAndCreatorId;

const schema = yup
  .object()
  .shape({
    title: yup.string().required('Название арены обязательно для заполнения'),
    description: yup.string().required('Описание арены обязательно для заполнения'),
    country: yup.string().required('Страна обязательна для заполнения'),
    city: yup.string().required('Город обязателен для заполнения'),
    street: yup.string().required('Улица/проспект/переулок обязательна для заполнения'),
    building: yup.string().required('Здание/строение/корпус обязательно для заполнения'),
    coordX: yup.number().required('Координата X обязательна для заполнения'),
    coordY: yup.number().required('Координата Y обязательна для заполнения'),
    metroStationId: yup.number().required('Станция метро обязательна для заполнения'),
  })
  .required();

type ArenaAddFormProps = {
  closeModal: () => void;
  metro: MetroStation[]
};

function ArenaAddForm({ closeModal, metro }: ArenaAddFormProps): JSX.Element {
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({

    resolver: yupResolver(schema),
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);

  const onSubmit = async (data) => {
    setIsSubmitting(true);

    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('description', data.description);
    formData.append('country', data.country);
    formData.append('city', data.city);
    formData.append('street', data.street);
    formData.append('building', data.building);
    formData.append('coordX', data.coordX.toString());
    formData.append('coordY', data.coordY.toString());
    formData.append('metroStationId', data.metroStationId.toString());

    if (selectedFiles) {
      Array.from(selectedFiles).forEach((file) => {
        formData.append('images', file); // Используем имя поля 'images' для загрузки нескольких файлов
      });
    }

    try {
      const response = await dispatch(addArena(formData));
      if (response.error) {
        console.error('Ошибка с сервера:', response.error);
      } else {
        reset();
        closeModal();
      }
    } catch (error) {
      console.error('Ошибка добавления арены:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedFiles(e.target.files);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
      <div>
        <label>Название арены:</label>
        <input type="text" {...register('title')} />
        {errors.title && <span className="error">{errors.title.message}</span>}
      </div>

      <div>
        <label>Описание арены:</label>
        <input type="text" {...register('description')} />
        {errors.description && <span className="error">{errors.description.message}</span>}
      </div>

      <div>
        <label>Страна:</label>
        <input type="text" {...register('country')} />
        {errors.country && <span className="error">{errors.country.message}</span>}
      </div>

      <div>
        <label>Город:</label>
        <input type="text" {...register('city')} />
        {errors.city && <span className="error">{errors.city.message}</span>}
      </div>

      <div>
        <label>Улица/проспект/переулок:</label>
        <input type="text" {...register('street')} />
        {errors.street && <span className="error">{errors.street.message}</span>}
      </div>

      <div>
        <label>Здание/строение/корпус:</label>
        <input type="text" {...register('building')} />
        {errors.building && <span className="error">{errors.building.message}</span>}
      </div>

      <div>
        <label>Координата X:</label>
        <input type="number" {...register('coordX')} />
        {errors.coordX && <span className="error">{errors.coordX.message}</span>}
      </div>

      <div>
        <label>Координата Y:</label>
        <input type="number" {...register('coordY')} />
        {errors.coordY && <span className="error">{errors.coordY.message}</span>}
      </div>

      <div>
        <select>
          {metro &&
            metro.map((elMetro: MetroStation) => (
              <option key={elMetro.id} value={elMetro.id} {...register('metroStationId')}>
                {elMetro.title}
              </option>
            ))}

        </select>
        {errors.metroStationId && <span className="error">{errors.metroStationId.message}</span>}
      </div>

      <div>
        <label>Загрузить фотографии арены:</label>
        <input type="file" multiple onChange={handleFileChange} />
      </div>

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Добавление...' : 'ОТПРАВИТЬ'}
      </button>
    </form>
  );
}

export default ArenaAddForm;

