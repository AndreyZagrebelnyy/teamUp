const { Arena, MetroStation, Event, Date, ArenaDate } = require("../db/models");

class ArenaServices {
  async getAllArenas() {
    return Arena.findAll({
      include: [
        { model: MetroStation },
        { model: Event },
        {
          model: Date,
          through: {
            model: ArenaDate,
          },
        },
      ],
    });
  }
}

module.exports = new ArenaServices();
