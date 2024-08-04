import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import ProfileApi from './api/profileApi';
import type { Profile, ProfileId } from './types/ProfileType';


type ProfileState = {
    profiles: Profile[];
  errors: string | undefined;
  isLoading: boolean;
};

const initialState: ProfileState = {
    profiles: [],
  errors: undefined,
  isLoading: false,
};

export const getAllProfiles = createAsyncThunk('load/profiles', () => ProfileApi.getAllProfiles());

export const addProfile = createAsyncThunk(
  'add/profile',
  (data: { firstName: string; lastName: string; telegram: string; image: string; userId: number }) => ProfileApi.addProfile(data),
);

export const removeProfile = createAsyncThunk('remove/profile', (id: ProfileId) => ProfileApi.removeProfile(id));

export const updateProfile = createAsyncThunk(
  'update/profile',
  (data: { id: number; firstName: string; lastName: string; telegram: string; image: string; userId: number }) => ProfileApi.updateProfile(data),
);

export const profileSlice = createSlice({
  name: 'profiles',
  initialState,
  // синхронный редюсер
  reducers: {},
  extraReducers: (builder) => {
    builder
      // если все успешно выполнилось
      .addCase(getAllProfiles.fulfilled, (state, action) => {
        state.profiles = action.payload;
      })
      // если все плохо
      .addCase(getAllProfiles.rejected, (state, action) => {
        state.errors = action.error.message;
      })
      // в процессе
      .addCase(getAllProfiles.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addProfile.fulfilled, (state, action) => {
        state.profiles.push(action.payload);
      })
      .addCase(addProfile.rejected, (state, action) => {
        state.errors = action.error.message;
      })
      // в процессе
      .addCase(addProfile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(removeProfile.fulfilled, (state, action) => {
        state.profiles = state.profiles.filter((profile) => profile.id !== action.payload);
        state.isLoading = false;
      })
      .addCase(removeProfile.rejected, (state, action) => {
        state.errors = action.error.message;
        state.isLoading = false;
      })
      // в процессе
      .addCase(removeProfile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.profiles = state.profiles.map((profile) =>
            profile.id === action.payload.id ? action.payload : profile,
        );
      });
  },
});