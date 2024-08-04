import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { authSlice } from '../../../entities/user/authSlice';
import { eventSlice } from '../../../entities/event/eventSlice';
import { arenaSlice } from '../../../entities/arena/ArenaSlice';
import { sportSlice } from '../../../entities/sports/sportSlice';
import { profileSlice } from '../../../entities/profile/profileSlice';

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    events: eventSlice.reducer,
    arenas: arenaSlice.reducer,
    sports:sportSlice.reducer,
    profile:profileSlice.reducer
  },
});

export type StoreType = typeof store;

export type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

export default store;
