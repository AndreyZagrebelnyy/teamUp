"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Arena extends Model {
    static associate(models) {
      this.hasMany(models.Date, {
        through: ArenaDate,
        foreignKey: "arenaId",
      });

      this.hasMany(models.Image, {
        foreignKey: "arenaId",
      });

      this.belongsTo(models.MetroStationId, {
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
      address: DataTypes.STRING,
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
