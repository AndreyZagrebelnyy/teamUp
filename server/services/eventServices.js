const { Event, Arena, Date, ArenaDate, User } = require("../db/models");

class EventServices {
  async getAllEvents() {
    const events = await Event.findAll({
      include: [
        {
          model: User,
        },
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
    return events;
  }

  async createEvents(data) {
    return Event.create(data);
  }
}

module.exports = new EventServices();
