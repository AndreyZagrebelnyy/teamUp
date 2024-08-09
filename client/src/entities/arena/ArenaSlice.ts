import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { ArenaWithMetroStation, ArenaWithoutIdAndCreatorId } from './types/ArenaType';
import ArenaApi from './api/ArenaApi';

type ArenaState = {
  arenas: ArenaWithMetroStation[];
  favouriteArenas: ArenaWithMetroStation[];
  errors: string | undefined;
};

const initialState: ArenaState = {
  arenas: [],
  favouriteArenas: [],
  errors: undefined,
};

export const getAllArenas = createAsyncThunk('load/arenas', () => ArenaApi.getAllArenas());

export const addArena = createAsyncThunk('add/arena', async (data: ArenaWithoutIdAndCreatorId) =>
  ArenaApi.addArena(data),
);

export const removeArena = createAsyncThunk('delete/arena', async (id: number) =>
  ArenaApi.removeArena(id),
);

const arenasSlice = createSlice({
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
      })
      .addCase(removeArena.fulfilled, (state, action) => {
        state.arenas = state.arenas.filter(arena => arena.id !== action.payload);
      })
      .addCase(addArena.rejected, (state, action) => {
        state.errors = action.error.message;
      })
      .addCase(removeArena.rejected, (state, action) => {
        state.errors = action.error.message;
      });
  },
});

export default arenasSlice;
