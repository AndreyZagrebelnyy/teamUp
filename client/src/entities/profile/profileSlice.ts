// src/store/profileSlice.ts

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../../app/provider/store/store';



interface ProfileState {
    firstName: string;
    lastName: string;
    telegram: string;
    image: string;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

const initialState: ProfileState = {
    firstName: '',
    lastName: '',
    telegram: '',
    image: '',
    status: 'idle',
};

// Асинхронное действие для получения профиля
export const fetchProfile = createAsyncThunk(
    'profile/fetchProfile',
    async (_, { getState }) => {
        const state = getState() as RootState;
        const authToken = state.auth.token;

        const response = await new Promise<ProfileState>((resolve) =>
            setTimeout(() => resolve({ ...initialState, firstName: 'John', lastName: 'Doe' }), 1000)
        );
        
        return response;
    }
);

// Асинхронное действие для обновления профиля
export const updateProfile = createAsyncThunk(
    'profile/updateProfile',
    async (updatedProfile: Partial<ProfileState>, { getState }) => {
        const state = getState() as RootState;
        const authToken = state.auth.token;

        const response = await new Promise<ProfileState>((resolve) =>
            setTimeout(() => resolve({ ...updatedProfile, status: 'succeeded' }), 1000)
        );
        
        return response;
    }
);

// Создание slice для профиля
export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        // Определите любые синхронные действия здесь, если нужно
        clearProfile: (state) => {
            return { ...initialState };
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfile.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProfile.fulfilled, (state, action) => {
                return { ...state, ...action.payload, status: 'succeeded' };
            })
            .addCase(fetchProfile.rejected, (state) => {
                state.status = 'failed';
            })
            .addCase(updateProfile.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(updateProfile.fulfilled, (state, action) => {
                return { ...state, ...action.payload, status: 'succeeded' };
            })
            .addCase(updateProfile.rejected, (state) => {
                state.status = 'failed';
            });
    },
});

// Экспортируем actions и reducer
export const { clearProfile } = profileSlice.actions;
export default profileSlice.reducer;

