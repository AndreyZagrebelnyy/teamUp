const {  MetroStation } = require("../db/models");

class MetroServices {
  async getAllMetro() {
    return MetroStation.findAll()
  }}

module.exports = new MetroServices();
