const { Date, Arena, ArenaDate } = require("../db/models");

class DateServices {
  async getAllDates() {
    const dates = await Date.findAll({
      include: {
        model: Arena,
        through: ArenaDate,
      },
    });
    return dates;
  }
  async getArenaDates() {
    const dates = await Date.findAll({
      include: [{ model: Arena, through: ArenaDate }],
    });
    return dates;
  }

  async createDate(data) {
    const a = await Date.create(data);
    return a.get();
  }

  async deleteDate(id) {
    const date = await Date.findOne({ where: { id } });
    if (date) {
      date.destroy();
      return true;
    }
    return false;
  }
}

module.exports = new DateServices();
