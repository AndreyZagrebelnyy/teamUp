const { where } = require("sequelize");
const {
  Arena,
  MetroStation,
  Favourite,
  Event,
  Date,
  ArenaDate,
  User,
} = require("../db/models");

class favouriteArenaServices {
  async getAllFavouriteArenas(userId) {
    return Arena.findAll({
      include: [
        {
          model: User,
          where: { id: userId },
          through: {
            model: Favourite,
          },
        },
        { model: MetroStation },
        { model: Event },
        {
          model: Date,
          through: {
            model: ArenaDate,
          },
        },
      ],
    });
  }
}

module.exports = new favouriteArenaServices();
