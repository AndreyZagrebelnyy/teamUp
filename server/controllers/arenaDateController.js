const arenaDateServices = require("../services/arenaDateServices");

exports.createArenaDate = async (req, res) => {
  try {
    const { user } = res.locals;
    const { arenaId, dateId } = req.body;
    const arenaDate = await arenaDateServices.createArenaDate({
      arenaId,
      dateId,
    });
    if (arenaDate) {
      res.status(201).json({ message: "success", arenaDate });
      return;
    }

    res.status(400).json({ message: "Нет доступа" });
  } catch ({ message }) {
    res.json({ error: message });
  }
};
