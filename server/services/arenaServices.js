const { Arena, MetroStation, Event } = require("../db/models");

class ArenaServices {
  async getAllArenas() {
    return Arena.findAll({
      include: [
        { model: MetroStation },
        { model: Event }
      ]
    });
  }
}

module.exports = new ArenaServices();
