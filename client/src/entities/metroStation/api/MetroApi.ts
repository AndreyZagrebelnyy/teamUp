import axiosInstance from "../../../services/axiosInstance";
import { MetroStation } from "../types/MetroStationType";

class MetroApi {
  static getAllMetro = async (): Promise<MetroStation[]> => {
    try {
        const response = await axiosInstance.get('/metro')
        return response.data
    } catch (error) {
        console.log(error)
    }
  };
}



export default MetroApi