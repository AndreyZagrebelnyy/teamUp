import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import DateApi from './api/DateApi';
import type { DateId, DateWithArenas } from './types/dateType';

type DateState = {
  date: DateWithArenas[];
  errors: string | undefined;
};

const initialState: DateState = {
  date: [],
  errors: undefined,
};

export const getAllDates = createAsyncThunk('load/dates', () => DateApi.getAllDates());

export const addDate = createAsyncThunk(
  'add/date',
  (data: { startDate: string; endDate: string; arenaId: number }) => DateApi.addDate(data),
);

export const deleteDate = createAsyncThunk('remove/date', (id: DateId) => DateApi.deleteDate(id));

export const dateSlice = createSlice({
  name: 'date',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllDates.fulfilled, (state, action) => {
        state.date = action.payload;
      })
      .addCase(addDate.fulfilled, (state, action) => {
        state.date.push(action.payload);
      })
      .addCase(deleteDate.fulfilled, (state, action) => {
        state.date = state.date.filter((date) => date.id !== action.payload);
      });
  },
});
