const { ArenaDate } = require("../db/models");

class arenaDateServices {
  async createArenaDate(data) {
    return ArenaDate.create(data);
  }
}

module.exports = new arenaDateServices();
