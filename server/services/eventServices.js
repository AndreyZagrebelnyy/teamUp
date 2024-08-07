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

  async getOneEvent(eventId) {
    const event = await Event.findOne({
      where: { id: eventId }, // Указываем условие поиска по id
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
    return event;
  }

  async createEvents(data) {
    return Event.create(data);
  }
}

module.exports = new EventServices();
