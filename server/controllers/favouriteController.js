const FavouriteServices = require("../services/favouriteServices");

exports.createFavourite = async (req, res) => {
  try {
    const { user } = res.locals;
    const { arenaId } = req.body;

    const favourite = await FavouriteServices.createFavourite({
      userId: user.id,
      arenaId,
    });
    if (favourite) {
      res.status(201).json({ message: "success", favourite });
      return;
    }

    res.status(400).json({ message: "Нет доступа" });
  } catch ({ message }) {
    res.json({ error: message });
  }
};

exports.deleteFavourite = async (req, res) => {
  try {
    const { user } = res.locals;
    const { arenaId } = req.body;
    const result = await FavouriteServices.deleteFavourite({user, arenaId});
    if (result > 0) {
      res.status(200).json({ message: "success" });
      return;
    }
    res.status(400).json({ message: "Нет доступа" });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
};
