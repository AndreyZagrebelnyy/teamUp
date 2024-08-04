import axios, { AxiosError, AxiosResponse } from 'axios';
import { Profile, ProfileId } from '../types/ProfileType';
import axiosInstance from '../../../services/axiosInstance';

class ProfileApi {
  static getAllProfiles = async (): Promise<Profile[] | undefined> => {
    try {
      const response: AxiosResponse<{ message: string; profiles: Profile[] }> =
        await axios.get('/api/profile');
      return response.data.profiles;
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

  static removeProfile = async (id: ProfileId): Promise<ProfileId | undefined> => {
    try {
      const response: AxiosResponse<{ message: string }> = await axiosInstance.delete(
        `/profile/${id}`,
      );
      return id;
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

  static addProfile = async (data: {
    firstName: string;
    lastName: string;
    telegram: string;
    image: string;
    userId: number;
  }): Promise<Profile | undefined> => {
    try {
      const response: AxiosResponse<{ message: string; profile: Profile }> = await axiosInstance.post(
        '/profile',
        data,
      );
      return response.data.profile;
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

  static updateProfile = async (data: {
    id: number;
    firstName: string;
    lastName: string;
    telegram: string;
    image: string;
    userId: number;
  }): Promise<Profile | undefined> => {
    try {
      const response: AxiosResponse<{ message: string; profile: Profile }> = await axiosInstance.put(`/profile/${data.id}`, data);
return response.data.profile;

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

export default ProfileApi;