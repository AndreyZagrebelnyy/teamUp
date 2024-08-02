"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class MetroStation extends Model {
    static associate(models) {
      this.hasMany(models.Arena, {
        foreignKey: "metroStationId",
      });
    }
  }
  MetroStation.init(
    {
      title: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "MetroStation",
    }
  );
  return MetroStation;
};
