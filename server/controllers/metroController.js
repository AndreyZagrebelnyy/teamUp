const metroServices = require("../services/metroServices");

exports.getAllMetro = async (req, res) => {
  try {
    const metro = await metroServices.getAllMetro();
    if (metro) {
      res.status(201).json({ message: "success", metro });
      return;
    }
    res.status(400).json({ message: "Нет доступа" });
  } catch ({ message }) {
    res.json({ error: message });
  }
};
