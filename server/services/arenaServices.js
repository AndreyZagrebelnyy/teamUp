const { Arena, MetroStation, Favourite, Event, Date, ArenaDate, User } = require("../db/models");

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
        {
          model: User,
          through: {
            model: Favourite,
          },
        },
      ],
    });
  }

  async getArenaById(id) {
    return Arena.findByPk(id);
  }

  async createArena(data) {
    return Arena.create(data);
  }

  async updateArena(id, userId, data) {
    const arena = await Arena.findOne({ where: { id, userId } });
    if (arena) {
      return arena.update(data);
    }
    return null;
  }

  async deleteArena(id) {
    const arena = await Arena.findOne({ where: { id } });
    if (movie) {
      arena.destroy();
      return true;
    }
    return false;
  }
}

module.exports = new ArenaServices();
