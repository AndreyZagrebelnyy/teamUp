const { UserEvent } = require("../db/models");

class UserEventServices {
  async addToUserEvent(data) {
    return UserEvent.create(data);
  }
  async getAllUserEvents() {
    return UserEvent.findAll();
  }
}

module.exports = new UserEventServices();
