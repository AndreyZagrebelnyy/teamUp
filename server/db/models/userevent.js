"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserEvent extends Model {
    static associate(models) {}
  }
  UserEvent.init(
    {
      userId: DataTypes.INTEGER,
      eventId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "UserEvent",
    }
  );
  return UserEvent;
};
