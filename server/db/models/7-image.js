'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
    static associate(models) {
		this.belongsTo(models.Arena, { foreignKey: 'arenaId' });
    }
  }
  Image.init({
    url: DataTypes.STRING,
    arenaId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Image',
  });
  return Image;
};