const SportServices = require("../services/sportServices");

exports.getAllSports = async (req, res) => {
  try {
    const sports = await SportServices.getAllSports();
    res.status(200).json({ message: "success", sports });
  } catch ({ message }) {
    res.json({ error: message });
  }
};
