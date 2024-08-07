import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import FavouriteApi from './api/FavouriteApi';
import { ArenaId, ArenaWithMetroStation } from '../arena/types/ArenaType';
import { Favourite } from './type/FavouriteType';

type FavouriteState = {
  favourites: Favourite[];
  favouriteArenas: ArenaWithMetroStation[] | undefined;
  errors: string | undefined;
};

const initialState: FavouriteState = {
  favourites: [],
  favouriteArenas: [],
  errors: undefined,
};

export const getFavouriteArenas = createAsyncThunk('load/favouriteArenas', () =>
  FavouriteApi.getAllFavouriteArenas(),
);

export const removeFavourite = createAsyncThunk(
  'remove/favourite',
  ({ arenaId }: { arenaId: ArenaId }) => FavouriteApi.removeFavourite({ arenaId: arenaId }),
);

export const addFavourite = createAsyncThunk('add/favourite', (data: { arenaId: number }) =>
  FavouriteApi.addFavourite(data),
);

const favouriteSlice = createSlice({
  name: 'favouriteArenas',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getFavouriteArenas.fulfilled, (state, action) => {
        state.favouriteArenas = action.payload;
      })
      .addCase(addFavourite.fulfilled, (state, action) => {
        state.favourites.push(action.payload);
      })
      .addCase(removeFavourite.fulfilled, (state, action) => {
        state.favouriteArenas = state.favouriteArenas.filter(
          (favArena) => favArena.id !== action.payload,
        );
      });
  },
});

export default favouriteSlice;
