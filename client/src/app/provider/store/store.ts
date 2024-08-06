import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';

import { authSlice } from '../../../entities/user/authSlice';
import { eventSlice } from '../../../entities/event/eventSlice';
import arenasSlice from '../../../entities/arena/ArenaSlice';
import { sportSlice } from '../../../entities/sports/sportSlice';
import { dateSlice } from '../../../entities/date/DateSlice';
import metroSlice from '../../../entities/metroStation/MetroSlice';
import { profileSlice } from '../../../entities/profile/profileSlice';
import { levelSlice } from '../../../entities/level/levelSlice';
import {userEventSlice} from '../../../entities/userEvent/userEventSlice';


const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    events: eventSlice.reducer,
    arenas: arenasSlice.reducer,
    sports: sportSlice.reducer,
    dates: dateSlice.reducer,
    metro: metroSlice.reducer,
    level: levelSlice.reducer,
    profile: profileSlice.reducer,
    userEvent: userEventSlice.reducer,
  },
});

export type StoreType = typeof store;

export type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

export default store;
