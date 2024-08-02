"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
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
			through: UserEvent,
			foreignKey: 'eventId'
		})
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
