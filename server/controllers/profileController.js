const ProfileServices = require("../services/profileServices");

exports.getAllProfiles = async (req, res) => {
  try {
    const profiles = await ProfileServices.getAllProfiles();
    res.status(200).json({ message: "success", profiles });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
};

exports.getProfileById = async (req, res) => {
  try {
    const { userId } = req.params;
    const profile = await ProfileServices.getProfileById(+userId);
    res.status(200).json({ message: "success", profile });
  } catch ({ message }) {
    res.json({ error: message });
  }
};

exports.createProfile = async (req, res) => {
  try {
    const { user } = res.locals;
    const {
        firstName,
        lastName,
        telegram,
        image,
     
    } = req.body;
    const profile = await ProfileServices.createProfile({
        firstName,
        lastName,
        telegram,
        image,

    });
    if (profile) {
      res.status(201).json({ message: "success", profile });
      return;
    }

    res.status(400).json({ message: "Нет доступа" });
  } catch ({ message }) {
    res.json({ error: message });
  }
};

exports.updateProfile = async (req, res) => {
  try {
    const { user } = res.locals;
    const { profileId } = req.params;
    const {
        firstName,
        lastName,
        telegram,
        image,
    } = req.body;

    const profile = await ProfileServices.updateProfile(+profileId, user.id, {
        firstName,
        lastName,
        telegram,
        image,
    });

    if (profile) {
      res.status(200).json({ message: "success", profile });
      return;
    }

    res.status(400).json({ message: "Нет доступа" });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
};

exports.deleteProfile = async (req, res) => {
  try {
    const { user } = res.locals;
    const { profileId } = req.params;
    const result = await ProfileServices.deleteProfile(+profileId);

    if (result > 0) {
      res.status(200).json({ message: "success" });
      return;
    }

    res.status(400).json({ message: "Нет доступа" });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
};
