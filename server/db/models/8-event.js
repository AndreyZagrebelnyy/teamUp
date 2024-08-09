"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    static associate(models) {
      this.belongsTo(models.Arena, {
        foreignKey: "arenaId",
      });

      this.belongsTo(models.Sport, {
        foreignKey: "sportId",
      });

      this.belongsTo(models.Level, {
        foreignKey: "levelId",
      });

      this.belongsToMany(models.User, {
        through: models.UserEvent,
        foreignKey: "eventId",
        // otherKey: "userId",
      });
    }
  }
  Event.init(
    {
      arenaId: DataTypes.INTEGER,
      arenaDateId: DataTypes.INTEGER,
      sportId: DataTypes.INTEGER,
      price: DataTypes.INTEGER,
      levelId: DataTypes.INTEGER,
      teamSize: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Event",
    }
  );
  return Event;
};
