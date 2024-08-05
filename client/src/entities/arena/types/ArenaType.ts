import type { Dates } from '../../date/types/dateType';
import type { MetroStation } from '../../metroStation/types/MetroStationType';

import { User } from '../../user/types/userType';

export type Arena = {
  id: number;
  title: string;
  description: string;
  country: string;
  city: string;
  street: string;
  building: string;
  coordX: number;
  coordY: number;
  creatorId: number;
  metroStationId: number;
};

export type ArenaWithMetroStation = Arena & { MetroStation: MetroStation; Dates: Dates[]; Users: User[] };

export type ArenaWithoutId = Omit<Arena, 'id'>;

export type ArenaWithoutIdAndCreatorId = Omit<ArenaWithoutId, 'creatorId'>;

export type ArenaId = Arena['id'];
