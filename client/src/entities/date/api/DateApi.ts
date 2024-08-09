import type { AxiosResponse } from 'axios';
import axiosInstance from '../../../services/axiosInstance';
import type { Date, DateId, DateWithArenas } from '../types/dateType';
import { ArenaId } from '../../arena/types/ArenaType';

class DateApi {
  static getAllDates = async (): Promise<DateWithArenas[]> => {
    const response: AxiosResponse<{ message: string; dates: DateWithArenas[] }> =
      await axiosInstance.get(`/dates`);
		console.log(1111111111, response.data.dates);
    return response.data.dates;
  };

  static getArenaDates = async (arenaId: ArenaId): Promise<DateWithArenas[]> => {
    const response: AxiosResponse<{ message: string; dates: DateWithArenas[] }> =
      await axiosInstance.get(`/arenaDates/${arenaId}`);
    return response.data.dates;
  };

  static addDate = async (data: {
    startDate: string;
    endDate: string;
    arenaId: number;
  }): Promise<DateWithArenas> => {
    const response: AxiosResponse<{ message: string; date: DateWithArenas }> =
      await axiosInstance.post(`/dates`, data);
		console.log(response.data.date);
		
    return response.data.date;
  };

  static addArenaDate = async (data: {
    startDate: string;
    endDate: string;
    arenaId: number;
  }): Promise<Date> => {
    const response: AxiosResponse<{ message: string; date: Date }> = await axiosInstance.post(
      `/dates/${data.arenaId}`,
      data,
    );
    return response.data.date;
  };

  static deleteDate = async (id: DateId): Promise<DateId> => {
    await axiosInstance.delete(`/dates/${id}`);
    return id;
  };
}

export default DateApi;
