import { createAsyncThunk } from '@reduxjs/toolkit';
import FavouriteApi from './api/FavouriteApi';
import { ArenaId } from '../arena/types/ArenaType';

export const removeFavourite = createAsyncThunk('remove/favourite', ({arenaId} : {arenaId: ArenaId}) =>
  FavouriteApi.removeFavourite({arenaId: arenaId})
);

export const addFavourite = createAsyncThunk(
  'add/favourite',
  (data: {
    arenaId: number
  }) => FavouriteApi.addFavourite(data),
);

// export const arenaSlice = createSlice({
//   name: 'arenas',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(getAllArenas.fulfilled, (state, action) => {
//         state.arenas = action.payload;
//       })
//       .addCase(addArena.fulfilled, (state, action) => {
//         state.arenas.push(action.payload);
//       });
//   },
// });
