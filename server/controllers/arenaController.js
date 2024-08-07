const ArenaServices = require("../services/arenaServices");
const upload = require('../middleware/multerConfig');

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
    res.status(200).json({ message: "success", arena });
  } catch ({ message }) {
    res.json({ error: message });
  }
};

// Логика для загрузки фотографий и создания арены
exports.createArena = async (req, res) => {
  try {
    upload(req, res, async (err) => {
      if (err) {
        console.error('Ошибка multer:', err);
        return res.status(500).json({ error: "Ошибка загрузки файлов" });
      }

      const { user } = res.locals;
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

      // Создание арены
      const arena = await ArenaServices.createArena({
        title,
        description,
        country,
        city,
        street,
        building,
        coordX,
        coordY,
        metroStationId,
      });

      if (arena) {
        res.status(201).json({ message: "success", arena, files: req.files });
        return;
      }

      res.status(400).json({ message: "Нет доступа" });
    });
  } catch ({ message }) {
    res.json({ error: message });
  }
};

exports.updateArena = async (req, res) => {
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

    const arena = await ArenaServices.updateArena(+arenaId, user.id, {
      title,
      description,
      country,
      city,
      street,
      building,
      coordX,
      coordY,
      metroStationId,
    });

    if (arena) {
      res.status(200).json({ message: "success", arena });
      return;
    }

    res.status(400).json({ message: "Нет доступа" });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
};

exports.deleteArena = async (req, res) => {
  try {
    const { user } = res.locals;
    const { arenaId } = req.params;
    const result = await ArenaServices.deleteArena(+arenaId);

    if (result > 0) {
      res.status(200).json({ message: "success" });
      return;
    }

    res.status(400).json({ message: "Нет доступа" });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
};
