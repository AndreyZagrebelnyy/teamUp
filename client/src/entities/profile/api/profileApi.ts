import { AxiosError, AxiosResponse } from "axios";
import { Profile } from "../../user/types/userType";
import axiosInstance from "../../../services/axiosInstance";


class ProfileApi {
    static getUserProfile = async(): Promise<Profile[]> => {
        try {
            const response: AxiosResponse<{ message: string, profile: Profile[]}> =
            await axiosInstance.get('/profile')
            return response.data.profile
        } catch (error) {
            const axiosError = error as AxiosError
            if (axiosError.response?.status) {
                switch (axiosError.response.status) {
                    case 400:
                        throw new Error(`Bad request:${axiosError.response.data}`)
                        case 401:
                            throw new Error(`Нет прав:${axiosError.response.data}`)
                            default:
                                break
                }
            }
        }
    }

    
}