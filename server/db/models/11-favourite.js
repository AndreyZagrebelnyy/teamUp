"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Favourite extends Model {
    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: "userId",
      });
      this.belongsToMany(models.Arena, {
        through: "FavouriteArena",
        foreignKey: "favouriteId",
      });
    }
  }
  Favourite.init(
    {
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Favourite",
    }
  );
  return Favourite;
};
