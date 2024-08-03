const { Date } = require("../db/models");

class DateServices {
  async createDate(data) {
    return Date.create(data);
  }
}

module.exports = new DateServices();
