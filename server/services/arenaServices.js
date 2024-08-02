const { Arena, MetroStation } = require("../db/models");


class ArenaServices {
  async getAllArenas() {
    return Arena.findAll({include: MetroStation});
  }
}

module.exports = new ArenaServices();
