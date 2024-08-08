const ArenaServices = require("../services/arenaServices");
const upload = require("../middleware/multerConfig");

exports.getAllArenas = async (req, res) => {
  try {
    const arenas = await ArenaServices.getAllArenas();
    res.status(200).json({ message: "success", arenas });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
};

exports.getArenaById = async (req, res) => {
  try {
    const { arenaId } = req.params;
    const arena = await ArenaServices.getArenaById(+arenaId);
    if (arena) {
      res.status(200).json({ message: "success", arena });
    } else {
      res.status(404).json({ message: "Arena not found" });
    }
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
};

exports.createArena = async (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      console.error("Ошибка multer:", err);
      return res.status(500).json({ error: "Ошибка загрузки файлов" });
    }

    try {
      const {
        title,
        description,
        country,
        city,
        street,
        building,
        coordX,
        coordY,
        metroStationId,
      } = req.body;

      const imagePaths = req.files
        ? req.files.map((file) => `/img/${file.filename}`)
        : [];

      const arena = await ArenaServices.createArena(
        {
          title,
          description,
          country,
          city,
          street,
          building,
          coordX,
          coordY,
          metroStationId,
          creatorId: res.locals.user.id,
        },
        imagePaths
      );

      res.status(201).json({ message: "success", arena, files: req.files });
    } catch ({ message }) {
      res.status(500).json({ error: message });
    }
  });
};

exports.updateArena = async (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      console.error("Ошибка multer:", err);
      return res.status(500).json({ error: "Ошибка загрузки файлов" });
    }

    try {
      const { user } = res.locals;
      const { arenaId } = req.params;
      const {
        title,
        description,
        country,
        city,
        street,
        building,
        coordX,
        coordY,
        metroStationId,
      } = req.body;

      const imagePaths = req.files
        ? req.files.map((file) => `/img/${file.filename}`)
        : [];

      const arena = await ArenaServices.updateArena(
        +arenaId,
        user.id,
        {
          title,
          description,
          country,
          city,
          street,
          building,
          coordX,
          coordY,
          metroStationId,
        },
        imagePaths
      );

      if (arena) {
        res.status(200).json({ message: "success", arena });
      } else {
        res.status(400).json({ message: "Нет доступа" });
      }
    } catch ({ message }) {
      res.status(500).json({ error: message });
    }
  });
};

exports.deleteArena = async (req, res) => {
  try {
    const { arenaId } = req.params;
    const result = await ArenaServices.deleteArena(+arenaId);

    if (result) {
      res.status(200).json({ message: "success" });
    } else {
      res.status(400).json({ message: "Нет доступа" });
    }
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
};
