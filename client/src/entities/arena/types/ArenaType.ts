import { MetroStation } from "../../metroStation/type/MetroStationType";

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
  MetroStation: MetroStation
};
export type ArenaWithMetroStation = {
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
  MetroStation: MetroStation
};

export type ArenaWithoutId = Omit<Arena, 'id'>;

export type ArenaId = Arena['id']
