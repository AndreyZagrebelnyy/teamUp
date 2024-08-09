const { Level } = require("../db/models");
class LevelServices {
  async getAllLevels() {
    return  Level.findAll();
  }
}




module.exports = new LevelServices()