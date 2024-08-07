import type { AxiosResponse } from 'axios';
import axiosInstance from '../../../services/axiosInstance';
import type { Date } from '../types/dateType';

class DateApi {
  static addDate = async (data: {
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
}

export default DateApi;
