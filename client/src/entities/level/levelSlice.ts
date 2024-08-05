import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { Level } from './types/levelTypes';
import LevelApi from './api/LevelApi';

type LevelState = {
  levels: Level[];
  errors: string | undefined;
  isLoading: boolean;
};
const initialState: LevelState = {
  levels: [],
  errors: undefined,
  isLoading: false,
};
export const getAllLevels = createAsyncThunk('load/levels', () => LevelApi.getAllLevels());

export const levelSlice = createSlice({
  name: 'levels',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllLevels.fulfilled, (state, action) => {
        state.levels = action.payload;
      })

      .addCase(getAllLevels.rejected, (state, action) => {
        state.errors = action.error.message;
      })
      .addCase(getAllLevels.pending, (state) => {
        state.isLoading = true;
      });
  },
});
