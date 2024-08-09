import type { AxiosError, AxiosResponse } from 'axios';
import type { Arena, ArenaId, ArenaWithMetroStation } from '../types/ArenaType';
import axiosInstance from '../../../services/axiosInstance';

class ArenaApi {
  static getAllArenas = async (): Promise<ArenaWithMetroStation[]> => {
    const response: AxiosResponse<{ message: string; arenas: ArenaWithMetroStation[] }> =
      await axiosInstance.get('/arenas');
    return response.data.arenas;
  };

  static removeArena = async (id: ArenaId): Promise<ArenaId> => {
    await axiosInstance.delete(`/arenas/${id}`);
    return id;
  };

  static addArena = async (data: {
    title: string;
    description: string;
    country: string;
    city: string;
    street: string;
    building: string;
    coordX: number;
    coordY: number;
    metroStationId: number;
  }): Promise<Arena> => {
    const response: AxiosResponse<{ message: string; arena: Arena }> = await axiosInstance.post(
      '/arenas',
      data,
    );
    return response.data.arena;
  };

  static updateArena = async (data: {
    id: number;
    title: string;
    description: string;
    country: string;
    city: string;
    street: string;
    building: string;
    coordX: number;
    coordY: number;
    metroStationId: number;
  }): Promise<Arena | undefined> => {
    try {
      const response: AxiosResponse = await axiosInstance.put(`/arenas/${data.id}`, data);
      return response.data.arena;
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

export default ArenaApi;
