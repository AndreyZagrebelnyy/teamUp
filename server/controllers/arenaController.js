const ArenaServices = require("../services/arenaServices");

exports.getAllArenas = async (req, res) => {
  try {
    const arenas = await ArenaServices.getAllArenas();
    res.status(200).json({ message: "success", arenas });
  } catch ({ message }) {
    res.json({ error: message });
  }
};
