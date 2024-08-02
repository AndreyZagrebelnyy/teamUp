'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MetroStation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
this.hasMany(models.Arena, {
	foreignKey: 'metroStationId'
})    
}
  }
  MetroStation.init({
    title: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'MetroStation',
  });
  return MetroStation;
};