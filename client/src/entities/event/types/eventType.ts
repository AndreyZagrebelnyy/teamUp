import { Arena, ArenaWithDates } from "../../arena/types/ArenaType";
import { Date } from "../../date/types/dateType";
import { UserEvent } from "../../userEvent/types/userEventType";

export type Event = {
  id: number;
  arenaId: number;
  arenaDateId: number;
  sportId: number;
  price: number;
  levelId: number;
  teamSize: number;
};

export type EventIncludeAll = Event & { Arena: ArenaWithDates};
