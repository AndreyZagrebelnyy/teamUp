import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import DateApi from './api/DateApi';
import type { Date } from './types/dateType';

type DateState = {
  date: Date[];
  errors: string | undefined;
};

const initialState: DateState = {
  date: [],
  errors: undefined,
};

export const addDate = createAsyncThunk(
  'add/date',
  (data: { startDate: string; endDate: string; arenaId: number }) =>
    DateApi.addDate(data),
);

export const dateSlice = createSlice({
  name: 'date',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addDate.fulfilled, (state, action) => {
      state.date.push(action.payload);
    });
  },
});
