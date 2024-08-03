"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Arena extends Model {
    static associate(models) {
      this.belongsToMany(models.Date, {
        through: models.ArenaDate,
        foreignKey: "arenaId",
      });

      this.hasMany(models.Image, {
        foreignKey: "arenaId",
      });

      this.belongsTo(models.MetroStation, {
        foreignKey: "metroStationId",
      });
      this.hasMany(models.Event, {
        foreignKey: "arenaId",
      });
      this.belongsTo(models.User, {
        foreignKey: "creatorId",
      });
    }
  }
  Arena.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      country: DataTypes.STRING,
      city: DataTypes.STRING,
      street: DataTypes.STRING,
      building: DataTypes.STRING,
      coordX: DataTypes.FLOAT,
      coordY: DataTypes.FLOAT,
      creatorId: DataTypes.INTEGER,
      metroStationId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Arena",
    }
  );
  return Arena;
};
