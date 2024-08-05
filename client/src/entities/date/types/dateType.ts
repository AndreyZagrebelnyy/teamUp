export type Date = {
  id: number;
  startDate: string;
  endDate: string;
};

export type ArenaDate = {
  id: number;
  arenaId: number;
  dateId: number;
};

export type Dates = Date & { ArenaDate: ArenaDate };
