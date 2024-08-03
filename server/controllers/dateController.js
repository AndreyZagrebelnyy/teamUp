const arenaDateServices = require("../services/arenaDateServices");
const dateServices = require("../services/dateServices");

exports.createDate = async (req, res) => {
  try {
    const { user } = res.locals;
    const { arenaId } = req.params;
    const { startDate, endDate } = req.body;
    const date = await dateServices.createDate({
      startDate,
      endDate,
    });
    if (date) {
      const arenaDate = await arenaDateServices.createArenaDate({
        arenaId: arenaId,
        dateId: date.id,
      });
      res.status(201).json({ message: "success", date, arenaDate });
      return;
    }

    res.status(400).json({ message: "Нет доступа" });
  } catch ({ message }) {
    res.json({ error: message });
  }
};
