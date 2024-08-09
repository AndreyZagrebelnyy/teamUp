export type Favourite = {
  id: number;
  userId: number;
  arenaId: number;
};
export type FavouriteWithoutId = Omit<Favourite, 'id'>;

export type FavouriteId = Favourite['id'];
