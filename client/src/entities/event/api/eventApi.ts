import type { AxiosResponse } from 'axios';
import axiosInstance from '../../../services/axiosInstance';
import type { EventIncludeAll } from '../types/eventType';

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
}

export default EventApi;
