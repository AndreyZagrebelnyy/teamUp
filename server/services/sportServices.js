const { Sport } = require("../db/models");
class SportServices {
  async getAllSports() {
    return Sport.findAll();
  }
}

module.exports = new SportServices();
