import type { AxiosResponse } from "axios";
import type { Sport } from "../types/sportTypes";
import axiosInstance from "../../../services/axiosInstance";

class SportApi {
    static getAllSports = async():Promise<Sport[]>=>{
        try {
            const response:AxiosResponse<{message:string,sports:Sport[]}> = await axiosInstance.get('/sports');
            return response.data.sports
            
        }catch (error) {
            throw new Error(`Error: ${error.message}`);
        }
    }
}
export default SportApi