const { Event, Arena, Date, ArenaDate } = require("../db/models");

class EventServices {
  async getAllEvents() {
    return Event.findAll({
      include: [
        {
          model: Arena,
          include: [
            {
              model: Date,
              through: {
                model: ArenaDate,
              },
            },
          ],
        },
      ],
    });
  }
}

module.exports = new EventServices();
