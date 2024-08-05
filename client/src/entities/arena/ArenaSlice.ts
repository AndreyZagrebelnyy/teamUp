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

export const addArena = createAsyncThunk('add/arena', async (data: ArenaWithoutIdAndCreatorId) =>
  ArenaApi.addArena(data),
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
      .addCase(addArena.rejected, (state, action) => {
        state.errors = action.error.message;
      });
  },
});

export default arenasSlice;
