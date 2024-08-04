"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      this.belongsToMany(models.Event, {
        through: models.UserEvent,
        foreignKey: "userId",
      });
      this.belongsToMany(models.Arena, {
        through: models.Favourite,
        foreignKey: "userId",
      });
      this.hasMany(models.Arena, {
        foreignKey: "creatorId",
      });
      this.hasOne(models.Profile, {
        foreignKey: "userId",
      });
    }
  }
  User.init(
    {
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      isAdmin: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
