const arenaDateServices = require("../services/arenaDateServices");
const arenaServices = require("../services/arenaServices");
const dateServices = require("../services/dateServices");

exports.getAllDates = async (req, res) => {
  try {
    const dates = await dateServices.getAllDates();
    res.status(200).json({ message: "success", dates });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
};

exports.getArenaDates = async (req, res) => {
  try {
    const dates = await dateServices.getArenaDates();
    res.status(200).json({ message: "success", dates });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
};

exports.createDate = async (req, res) => {
  try {
    const { user } = res.locals;
    const { startDate, endDate, arenaId } = req.body;
    const date = await dateServices.createDate({
      startDate,
      endDate,
    });
    if (date) {
      const arenaDate = await arenaDateServices.createArenaDate({
        arenaId: arenaId,
        dateId: date.id,
      });
      const arena = await arenaServices.getArenaById(arenaId);
      const dateWithArenas = {
        ...date,
        Arenas: [arena],
      };
      res.status(201).json({ message: "success", date: dateWithArenas });
      return;
    }
    res.status(400).json({ message: "Нет доступа" });
  } catch ({ message }) {
    res.json({ error: message });
  }
};
exports.deleteDate = async (req, res) => {
  try {
    const { dateId } = req.params;
    const result = await dateServices.deleteDate(dateId);

    if (result > 0) {
      res.status(200).json({ message: "success" });
      return;
    }
    res.status(400).json({ message: "Нет доступа" });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
};
