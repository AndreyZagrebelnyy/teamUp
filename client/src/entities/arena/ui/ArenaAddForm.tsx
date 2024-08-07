import React, { useState } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import type { ArenaWithoutIdAndCreatorId } from '../types/ArenaType';
import { addArena } from '../ArenaSlice';  // Убедитесь, что путь правильный
import { useAppDispatch, useAppSelector } from '../../../app/provider/store/store';
import './ArenaAddForm.css';
import type { MetroStation } from '../../metroStation/types/MetroStationType';

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

function ArenaAddForm({ closeModal }): JSX.Element {
  const { metro } = useAppSelector((store) => store.metro.metro);
  console.log(metro);
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

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setIsSubmitting(true);
    try {
      await dispatch(addArena(data));
      setIsSubmitting(false);
      reset();
      closeModal();
    } catch (error) {
      console.error('Ошибка добавления арены:', error);
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input type="text" placeholder="Название" {...register('title')} />
        {errors.title && <span className="error">{errors.title.message}</span>}
      </div>
      <div>
        <input type="text" placeholder="Описание" {...register('description')} />
        {errors.description && <span className="error">{errors.description.message}</span>}
      </div>
      <div>
        <input type="text" placeholder="Страна" {...register('country')} />
        {errors.country && <span className="error">{errors.country.message}</span>}
      </div>
      <div>
        <input type="text" placeholder="Город" {...register('city')} />
        {errors.city && <span className="error">{errors.city.message}</span>}
      </div>
      <div>
        <input type="text" placeholder="Улица/проспект/переулок" {...register('street')} />
        {errors.street && <span className="error">{errors.street.message}</span>}
      </div>
      <div>
        <input type="text" placeholder="Здание/строение/корпус" {...register('building')} />
        {errors.building && <span className="error">{errors.building.message}</span>}
      </div>
      <div>
        <input type="number" placeholder="Коорд X" {...register('coordX')} />
        {errors.coordX && <span className="error">{errors.coordX.message}</span>}
      </div>
      <div>
        <input type="number" placeholder="Коорд Y" {...register('coordY')} />
        {errors.coordY && <span className="error">{errors.coordY.message}</span>}
      </div>
      <div>
        <select {...register('metroStationId')}>
          {metro.map((elMetro: MetroStation) => (
            <option key={elMetro.id} value={elMetro.id}>
              {elMetro.title}
            </option>
          ))}
        </select>
        {errors.metroStationId && <span className="error">{errors.metroStationId.message}</span>}
      </div>
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Добавление...' : 'ОТПРАВИТЬ'}
      </button>
    </form>
  );
}

export default ArenaAddForm;
