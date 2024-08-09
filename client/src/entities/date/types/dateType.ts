import { Arena } from '../../arena/types/ArenaType';

export type Date = {
  id: number;
  startDate: string;
  endDate: string;
};

export type DateId = Date['id'];

export type DateWithArenas = {
  id: number;
  startDate: string;
  endDate: string;
  Arenas: Arena[];
};

export type ArenaDate = {
  id: number;
  arenaId: number;
  dateId: number;
};

export type Dates = Date & { ArenaDate: ArenaDate };
