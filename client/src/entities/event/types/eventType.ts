import type { User } from '../../user/types/userType';

export type Event = {
  id: number;
  arenaId: number;
  arenaDateId: number;
  sportId: number;
  price: number;
  levelId: number;
  teamSize: number;
};

export type EventIncludeAll ={
  id: number;
  title: string;
  price: number;
  teamSize: number;
  sportId: number;
  levelId: number;
  arenaDateId: number;
  Arena: {
    title: string;
    Dates: { id: number; startDate: string; endDate: string }[];
  };
  Users: User[]; // Убедитесь, что Users объявлено как массив User объектов
  // Другие свойства события при необходимости
}
