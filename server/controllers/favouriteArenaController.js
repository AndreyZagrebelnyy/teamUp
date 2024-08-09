const favouriteArenaServices = require("../services/favouriteArenaServices");

exports.getAllFavouriteArenas = async (req, res) => {
  try {
	  const {user} = res.locals
    const favouriteArenas = await favouriteArenaServices.getAllFavouriteArenas(user.id);
    res.status(200).json({ message: "success", favouriteArenas });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
};