import type { AxiosError, AxiosResponse } from 'axios';
import type { Favourite, FavouriteId } from '../type/FavouriteType';
import type { Arena, ArenaWithMetroStation } from '../../arena/types/ArenaType';
import axiosInstance from '../../../services/axiosInstance';

class FavouriteApi {
  static getAllFavouriteArenas = async (): Promise<ArenaWithMetroStation[]> => {
    const response: AxiosResponse<{ message: string; favouriteArenas: ArenaWithMetroStation[] }> =
      await axiosInstance.get('/favouriteArenas');
    return response.data.favouriteArenas;
  };

  static addFavourite = async (data: { arenaId: number }): Promise<Favourite> => {
    const response: AxiosResponse<{ message: string; favourite: Favourite }> =
      await axiosInstance.post('/favourites', data);
    return response.data.favourite;
  };

  static removeFavourite = async (data: { arenaId: number }): Promise<FavouriteId | undefined> => {
    try {
      const response: AxiosResponse<{ message: string }> = await axiosInstance.delete(
        `/favourites`,
        { data },
      );
      return data.arenaId;
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
