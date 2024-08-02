'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ArenaDate extends Model {
    static associate(models) {
    }
  }
  ArenaDate.init({
    arenaId: DataTypes.INTEGER,
    dateId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ArenaDate',
  });
  return ArenaDate;
};