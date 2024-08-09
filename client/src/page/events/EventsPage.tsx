import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { DatePicker } from '@mantine/dates'; // Импортируем DatePicker
import { Button, Modal, Text, Select } from '@mantine/core'; // Импортируем Select из Mantine
import { showNotification } from '@mantine/notifications';
import { useAppDispatch, useAppSelector } from '../../app/provider/store/store';
import EventItem from '../../entities/event/ui/EventItem';
import { addUserEvent } from '../../entities/userEvent/userEventSlice';
import { getAllEvents } from '../../entities/event/eventSlice';
import './EventsPage.css';

function EventsPage(): JSX.Element {
  const dispatch = useAppDispatch();

  const usersEvents = useAppSelector((store) => store.userEvent.userEvent);
  const events = useAppSelector((store) => store.events.events);
  const sports = useAppSelector((store) => store.sports.sports);
  const levels = useAppSelector((store) => store.level.levels);
  const location = useLocation();
  const profiles = useAppSelector((store) => store.profile.profiles);
  const user = useAppSelector((store) => store.auth.user);

  const [selectedSport, setSelectedSport] = useState<string | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  const [date, setDate] = useState<Date | null>(null);

  const handleSportChange = (value: string | null) => {
    setSelectedSport(value);
  };

  const handleLevelChange = (value: string | null) => {
    setSelectedLevel(value);
  };

  const handleDateChange = (newDate: Date | null) => {
    setDate(newDate);
  };

  const incrementDate = () => {
    if (date) {
      setDate(new Date(date.getTime() + 24 * 60 * 60 * 1000)); // Добавляем один день
    }
  };

  const decrementDate = () => {
    if (date) {
      setDate(new Date(date.getTime() - 24 * 60 * 60 * 1000)); // Убираем один день
    }
  };

  const filteredUserEvents = events.filter((event) => {
    if (Array.isArray(event.Users) && event.Users.length < event.teamSize) {
      // Получаем дату события в формате ISO
      const eventDateStr = event.Arena.Dates.find(
        (data) => data.id === event.arenaDateId,
      )?.startDate;

      if (!eventDateStr) return false;

      // Преобразуем дату события и выбранную дату в объекты Date для сравнения
      const eventDate = new Date(eventDateStr);
      const selectedDate = date ? new Date(date) : null;

      // Форматируем даты в 'DD.MM.YYYY' для логов
      const eventDateFormatted = eventDate.toLocaleDateString('ru-RU');
      const selectedDateFormatted = selectedDate ? selectedDate.toLocaleDateString('ru-RU') : '';

      // Определяем соответствия
      const sportMatch = selectedSport ? event.sportId === parseInt(selectedSport) : true;
      const levelMatch = selectedLevel ? event.levelId === parseInt(selectedLevel) : true;
      const dateMatch = selectedDate ? eventDateFormatted === selectedDateFormatted : true;

      return sportMatch && levelMatch && dateMatch;
    }
    return false;
  });

  const [modalOpen, setModalOpen] = useState(false);
  const [currentEventId, setCurrentEventId] = useState<number | null>(null);
  const [modalMessage, setModalMessage] = useState('');

  const onHandleAddToEvent = (eventId: number) => {
    if (!user) return;
    const event = events.find((el) => el.id === eventId);
    const userProfile = profiles.find((profile) => profile.userId === user.id);

    if (!userProfile) {
      setModalMessage('У вас должен быть профиль для записи на событие!');
      setModalOpen(true);
      return;
    }

    setCurrentEventId(eventId);
    setModalOpen(true);
  };

  const add = () => {
    if (currentEventId !== null) {
      void dispatch(addUserEvent({ eventId: currentEventId, userId: user.id })).then(() => {
        showNotification({
          title: 'Успех!',
          message: 'Вы успешно зарегистрированы на событие',
          color: 'green',
          className: 'notifications-container', // Добавляем класс для позиционирования
        });
      });
      setModalOpen(false);
    }
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const sportParam = params.get('sport');
    if (sportParam) {
      setSelectedSport(sportParam);
    }
    void dispatch(getAllEvents());
  }, [location.search, usersEvents]);

  return (
    <div className='filter-sidebar'>
      <Modal opened={modalOpen} onClose={() => setModalOpen(false)} title="Информация">
        <Text>{modalMessage || 'Вы уверены, что хотите записаться на это событие?'}</Text>
        <Button onClick={add}>Да</Button>
        <Button onClick={() => setModalOpen(false)}>Нет</Button>
      </Modal>
      <div className="sidebar">
        <div className="filter-form">
          <Select
            label="Вид спорта"
            placeholder="Выберите вид спорта"
            value={selectedSport}
            onChange={handleSportChange}
            data={sports.map((sport) => ({ value: sport.id.toString(), label: sport.title }))}

          />
          <Select
            label="Уровень"
            placeholder="Выберите уровень"
            value={selectedLevel}
            onChange={handleLevelChange}
            data={levels.map((level) => ({ value: level.id.toString(), label: level.title }))}

          />
          <div className="date-picker-container">
            <button type="button" onClick={decrementDate}>
              ←
            </button>
            <DatePicker
              value={date}
              onChange={handleDateChange}
              defaultValue={new Date()}
              className="mantine-DatePicker" // Применение кастомного класса
            />
            <button type="button" onClick={incrementDate}>
              →
            </button>
          </div>
          <Button
            onClick={() => {
              setSelectedSport(null);
              setSelectedLevel(null);
              setDate(null);
            }}
          >
            Сбросить
          </Button>
        </div>
      </div>
      <div className="main-content">
        {filteredUserEvents &&
          filteredUserEvents.map((event) => (
            <EventItem key={event.id} event={event} onHandleAddToEvent={onHandleAddToEvent} />
          ))}
      </div>
    </div>
  );
}

export default EventsPage;
