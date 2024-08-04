import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { Sport } from "./types/sportTypes"
import SportApi from "./api/sportApi";

type SportState ={
    sports:Sport[];
    errors: string | undefined;
    isLoading: boolean;
};
const initialState:SportState ={
    sports:[],
    errors: undefined,
    isLoading: false,
}
export const getAllSports = createAsyncThunk('load/sports',()=>SportApi.getAllSports())


export const sportSlice = createSlice({
    name:'sports',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(getAllSports.fulfilled, (state,action) => {
state.sports = action.payload})

.addCase(getAllSports.rejected, (state, action) => {
    state.errors = action.error.message;
  })
  .addCase(getAllSports.pending, (state) => {
    state.isLoading = true;
  })
    }
})