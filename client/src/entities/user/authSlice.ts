import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { User, UserLoginForm, UserRegistrationForm } from './types/userType';
import AuthApi from "./api/authApi";

type UserState = {
    user: User | undefined;
    accessToken: string | undefined;
    errors: string | undefined;
  };
const initialState:UserState ={
    user:undefined,
    accessToken:undefined,
    errors:undefined,
}

export const registration = createAsyncThunk('registration/user',(data:UserRegistrationForm)=>  AuthApi.registration(data),
);

export const authorization = createAsyncThunk('authorization/user',(data:UserLoginForm)=>AuthApi.authorization(data))

export const logout = createAsyncThunk('logout/user',()=>AuthApi.logout())
export const tokensRefresh = createAsyncThunk('refresh/tokens',()=>AuthApi.tokensRefresh())

export const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(registration.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.accessToken = action.payload.accessToken;
            state.errors = undefined;
          })
          .addCase(registration.rejected, (state, action) => {
            state.errors = action.error.message;
          })
          .addCase(authorization.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.accessToken = action.payload.accessToken;
            state.errors = undefined;
          })
          .addCase(authorization.rejected, (state, action) => {
            state.errors = action.error.message;
          })
          .addCase(logout.fulfilled, (state, action) => {
            if (action.payload.message === 'success') {
              state.accessToken = undefined;
              state.user = undefined;
            }
          })
          .addCase(logout.rejected, (state, action) => {
            state.errors = action.error.message;
          })
          .addCase(tokensRefresh.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.accessToken = action.payload.accessToken;
            state.errors = undefined;
          })
          .addCase(tokensRefresh.rejected, (state, action) => {
            state.errors = action.error.message;
          });
      },
    });
