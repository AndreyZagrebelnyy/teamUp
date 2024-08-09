import type { AxiosResponse } from 'axios';
import axiosInstance from '../../../services/axiosInstance';
import { UserEvent } from '../types/userEventType';

class UserEventApi {
  static addToUserEvent = async (data: { userId: number; eventId: number }): Promise<UserEvent> => {
      const response: AxiosResponse<{ message: string; newUserEvent: UserEvent }> =
        await axiosInstance.post('/userEvent', data);
      return response.data.newUserEvent;
  };

  static getAllUserEvents = async (): Promise<UserEvent[]> => {
    try {
      const response: AxiosResponse<{ message: string; userEvents: UserEvent[] }> =
        await axiosInstance.get('/userEvent');
      return response.data.userEvents;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
}

export default UserEventApi;
