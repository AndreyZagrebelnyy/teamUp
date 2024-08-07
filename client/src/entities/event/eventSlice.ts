import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { Event, EventIncludeAll } from './types/eventType';
import EventApi from './api/eventApi';

type EventState = {
  event: Event | object;
  events: EventIncludeAll[];
};

const initialState: EventState = {
  event: {},
  events: [],
};

export const getAllEvents = createAsyncThunk('get/events', () => EventApi.getAllEvents());

export const createEvent = createAsyncThunk(
  'add/events',
  (data: {
    sportId: number;
    teamSize: number;
    arenaId: number;
    arenaDateId: number;
    levelId: number;
  }) => EventApi.createEvents(data),
);

export const eventSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getAllEvents.fulfilled, (state, action) => {
        state.events = action.payload.events;
      })
      .addCase(createEvent.fulfilled, (state, action) => {
        console.log('12312321312312312312')
        state.events.push(action.payload);
        
      });
  },
});
