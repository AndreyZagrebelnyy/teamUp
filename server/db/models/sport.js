"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Sport extends Model {
    static associate(models) {
      this.hasMany(models.Event, {
        foreignKey: "sportId",
      });
    }
  }
  Sport.init(
    {
      title: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Sport",
    }
  );
  return Sport;
};
