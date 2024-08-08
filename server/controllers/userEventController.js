const arenaServices = require("../services/arenaServices");
const eventServices = require("../services/eventServices");
const userEventServices = require("../services/userEventServices");
const sendEmailToUser = require("../utils/mailer");

exports.addToUserEvent = async (req, res) => {
  try {
    const { user } = res.locals;
    const { userId, eventId } = req.body;
    const newUserEvent = await userEventServices.addToUserEvent({
      eventId,
      userId,
    });

    const event = await eventServices.getOneEvent(eventId);

    if (!event) {
      res.status(404).json({ message: "Event not found" });
      return;
    }

    const arena = event.Arena;

    const emailData = {
      arenaTitle: arena.title,
      arenaAddress: `${arena.street}, ${arena.building}`,
      arenaDates: arena.Dates.map((d) => d.date).join(", "), // Преобразуем даты в строку
    };

    if (newUserEvent) {
      res.status(201).json({ message: "success", newUserEvent });
      sendEmailToUser(`${user.email}`, "event_registration", {
        data: emailData,
      });

      return;
    }

    res
      .status(400)
      .json({ message: "Не удалось добавить пользователя на ивент" });
  } catch ({ message }) {
    res.status(500).json({ error: message });
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
