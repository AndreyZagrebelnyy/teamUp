import type { AxiosResponse } from 'axios';
import axiosInstance from '../../../services/axiosInstance';
import type { Event, EventIncludeAll } from '../types/eventType';

type EventsResponse = {
  events: EventIncludeAll[];
  message: string;
};

class EventApi {
  static getAllEvents = async (): Promise<EventsResponse> => {
    try {
      const response: AxiosResponse<EventsResponse> = await axiosInstance.get('/events');
      return response.data;
    } catch (error) {
      console.log(error);
      throw new Error('Unable to fetch events');
    }
  };

  static createEvents = async (data: {
    eventId: number;
    sportId: number;
    teamSize: number;
    arenaId: number;
    arenaDateId: number;
    levelId: number;
  }): Promise<Event> => {
    try {
      const response: AxiosResponse<Event> = await axiosInstance.post('/events', data);
      return response.data;
    } catch (error) {
      console.log(error);
      throw new Error('Unable to fetch events');
    }
  };
}

export default EventApi;
