import type { ArenaWithMetroStation } from '../../arena/types/ArenaType';

export type Event = {
  id: number;
  arenaId: number;
  arenaDateId: number;
  sportId: number;
  price: number;
  levelId: number;
  teamSize: number;
};

export type EventIncludeAll = Event & { Arena: ArenaWithMetroStation };
