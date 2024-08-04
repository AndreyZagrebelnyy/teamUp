const { Favourite } = require("../db/models");

class FavouriteServices {
  async createFavourite(data) {
    return Favourite.create(data);
  }

  async deleteFavourite(data) {
	console.log(11111111, data);
	const {user, arenaId} = data
    const arena = await Favourite.findOne({ where: { userId: user.id & arenaId} });
    if (movie) {
      arena.destroy();
      return true;
    }
    return false;
  }
}

module.exports = new FavouriteServices();
