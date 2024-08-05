import type { AxiosError, AxiosResponse } from 'axios';
import axiosInstance from '../../../services/axiosInstance';
import type { Date } from '../types/dateType';

class DateApi {
  static addDate = async (data: {
    startDate: string;
    endDate: string;
    arenaId: number
  }): Promise<Date | undefined> => {
    try {
      const response: AxiosResponse<{ message: string; date: Date }> = await axiosInstance.post(
        `/dates/${data.arenaId}`,
        data,
      );
      return response.data.date;
    } catch (error) {
      const axiosError = error as AxiosError;
      if (axiosError.response) {
        switch (axiosError.response.status) {
          case 400:
            throw new Error(`Bad request: ${axiosError.response.data} `);
          case 401:
            throw new Error(`Нет прав: ${axiosError.response.data} `);
          case 403:
            throw new Error(`Пользователь не авторизирован: ${axiosError.response.data} `);
          default:
            break;
        }
      }
    }
  };
}

export default DateApi;
