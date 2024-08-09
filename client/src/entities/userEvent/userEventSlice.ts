import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import UserEventApi from './api/UserEventApi';
import type { UserEvent } from './types/userEventType';

type UserEventState = {
  userEvent: UserEvent[];
  errors: string | undefined;
  isLoading: boolean;
};

const initialState: UserEventState = {
  userEvent: [],
  errors: undefined,
  isLoading: false,
};

export const getAllUserEvents = createAsyncThunk('load/userEvent', async () => {
  const response = await UserEventApi.getAllUserEvents();
  return response;
});

export const addUserEvent = createAsyncThunk(
  'add/userEvent',
  async (data: { eventId: number; userId: number }) => {
    const response = await UserEventApi.addToUserEvent(data);
    return response;
  },
);

export const userEventSlice = createSlice({
  name: 'userEvent',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllUserEvents.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllUserEvents.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userEvent = action.payload;
      })
      .addCase(getAllUserEvents.rejected, (state, action) => {
        state.isLoading = false;
        state.errors = action.error.message;
      })
      .addCase(addUserEvent.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addUserEvent.fulfilled, (state, action) => {
        state.isLoading = false;
        console.log(action.payload);
        state.userEvent.push(action.payload);
      })
      .addCase(addUserEvent.rejected, (state, action) => {
        state.isLoading = false;
        state.errors = action.error.message;
      });
  },
});

export default userEventSlice;
