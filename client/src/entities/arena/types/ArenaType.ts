import { MetroStation } from "../../metroStation/type/MetroStationType";

export type BaseArena = {
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

export type Arena = BaseArena

export type ArenaWithMetroStation = BaseArena & {MetroStation: MetroStation}

export type ArenaWithEvents = BaseArena & {Events: Event[]}

export type ArenaWithEventsAndMetroStation = ArenaWithMetroStation & {Events: Event[]}

export type ArenaWithoutId = Omit<BaseArena, 'id'>;

export type ArenaWithoutIdAndUserId = Omit<ArenaWithoutId, 'creatorId'>;

export type ArenaId = Arena['id']
