const userEventServices = require("../services/userEventServices");

exports.addToUserEvent = async (req, res) => {
  try {
    const { user } = res.locals;
    const { userId, eventId } = req.body;

    const newUserEvent = await userEventServices.addToUserEvent({
      eventId,
      userId,
    });

    if (newUserEvent) {
      res.status(201).json({ message: "success", newUserEvent });
      return;
    }

    res.status(400).json({ message: "Нет доступа" });
  } catch ({ message }) {
    res.json({ error: message });
  }
};

exports.getAllUserEvents = async (req, res) => {
  try {
    const userEvents = await userEventServices.getAllUserEvents();
    if (userEvents.length > 0) {
      res.status(200).json({ message: "succes", userEvents });
    }
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
};
