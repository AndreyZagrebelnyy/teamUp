import type { AxiosResponse } from 'axios';
import type { Level } from '../types/levelTypes';
import axiosInstance from '../../../services/axiosInstance';

class LevelApi {
  static getAllLevels = async (): Promise<Level[]> => {
    try {
      const response: AxiosResponse<{ message: string; levels: Level[] }> =
        await axiosInstance.get('/levels');
      return response.data.levels;
    } catch (error) {
      throw new Error(`Error: ${error.message}`);
    }
  };
}
export default LevelApi;
