"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Level extends Model {
    static associate(models) {
      this.hasMany(models.Event, {
        foreignKey: "levelId",
      });
    }
  }
  Level.init(
    {
      title: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Level",
    }
  );
  return Level;
};
