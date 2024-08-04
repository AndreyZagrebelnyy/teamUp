import { AxiosError, AxiosResponse } from 'axios';
import axiosInstance from '../../../services/axiosInstance';
import { Favourite, FavouriteId } from '../type/FavouriteType';

class FavouriteApi {
  static removeFavourite = async (data: { arenaId: number}): Promise<FavouriteId | undefined> => {
    try {
		console.log(333333, data);
      const response: AxiosResponse<{ message: string }> =
        await axiosInstance.delete(`/favourites`, {data} );
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

  static addFavourite = async (data: { arenaId: number }): Promise<Favourite | undefined> => {
    try {
      const response: AxiosResponse<{ message: string; favourite: Favourite }> =
        await axiosInstance.post('/favourites', data);
      return response.data.favourite;
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

export default FavouriteApi;
