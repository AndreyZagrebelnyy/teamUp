import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import type { Event } from "./types/eventType"
import EventApi from "./api/eventApi"

type EventState = {
    event: Event | object
    events: Event[]
}

const initialState:EventState ={
    event: {},
    events: [],
}

export const getAllEvents = createAsyncThunk('get/events', () => EventApi.getAllEvents())


export const eventSlice = createSlice({
    name: 'events',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getAllEvents.fulfilled, (state, action) => {
            state.events = action.payload.events
        })
    },
})