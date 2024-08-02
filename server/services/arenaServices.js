const { Arena, MetroStation , Event} = require("../db/models");


class ArenaServices {
  async getAllArenas() {
    return Arena.findAll({include: Event,MetroStation});
  }
}

module.exports = new ArenaServices();
