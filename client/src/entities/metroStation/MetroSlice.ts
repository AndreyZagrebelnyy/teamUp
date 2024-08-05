import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { MetroStation } from './types/MetroStationType';
import MetroApi from './api/MetroApi';

type MetroSlice = {
  metro: MetroStation[];
  errors: string | undefined;
};

const initialState: MetroSlice = {
  metro: [],
  errors: undefined,
};

export const getAllMetro = createAsyncThunk('load/metro', () => MetroApi.getAllMetro());

const metroSlice = createSlice({
  name: 'metro',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllMetro.fulfilled, (state, action) => {
        state.metro = action.payload;
      })
      .addCase(getAllMetro.rejected, (state, action) => {
        state.errors = action.error.message;
      });
  },
});

export default metroSlice;
