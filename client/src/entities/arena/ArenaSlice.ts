import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { Arena, ArenaId, ArenaWithMetroStation } from './types/ArenaType';
import ArenaApi from './api/ArenaApi';

type ArenaState = {
  arenas: ArenaWithMetroStation[];
  errors: string | undefined;
};

const initialState: ArenaState = {
  arenas: [],
  errors: undefined,
};

export const getAllArenas = createAsyncThunk('load/arenas', () => ArenaApi.getAllArenas());

export const removeArena = createAsyncThunk('remove/arena', (id: ArenaId) =>
  ArenaApi.removeArena(id),
);

export const updateArena = createAsyncThunk(
  'update/arena',
  (data: {
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
  }) => ArenaApi.updateArena(data),
);

export const addArena = createAsyncThunk(
  'add/arena',
  (data: {
    title: string;
    description: string;
    country: string;
    city: string;
    street: string;
    building: string;
    coordX: number;
    coordY: number;
    metroStationId: number;
  }) => ArenaApi.addArena(data),
);

export const arenaSlice = createSlice({
  name: 'arenas',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllArenas.fulfilled, (state, action) => {
        state.arenas = action.payload;
      })
      .addCase(addArena.fulfilled, (state, action) => {
        state.arenas.push(action.payload);
      });
  },
});
