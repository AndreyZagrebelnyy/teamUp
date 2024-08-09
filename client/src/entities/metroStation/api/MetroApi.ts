import axiosInstance from '../../../services/axiosInstance';
import { MetroStation } from '../types/MetroStationType';

class MetroApi {
  static getAllMetro = async (): Promise<MetroStation[]> => {
    const response = await axiosInstance.get('/metro');
    return response.data.metro;
  };
}

export default MetroApi;
