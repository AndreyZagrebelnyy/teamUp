const { Event, Arena, Date, UserEvent } = require("../db/models");

class EventServices {
  async getAllEvents() {
    return Event.findAll({ include: Arena, Date, UserEvent });
  }
}

module.exports = new EventServices();
