"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Date extends Model {
    static associate(models) {
      this.belongsToMany(models.Arena, {
        through: models.ArenaDate,
        foreignKey: "dateId",
      });
    }
  }
  Date.init(
    {
      startDate: DataTypes.STRING,
      endDate: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Date",
    }
  );
  return Date;
};
