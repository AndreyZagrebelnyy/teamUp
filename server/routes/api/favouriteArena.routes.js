const router = require("express").Router();
const favouriteArenaController = require("../../controllers/favouriteArenaController");
const verifyAccessToken = require("../../middleware/verifyAccessToken");

router
  .get("/", verifyAccessToken, favouriteArenaController.getAllFavouriteArenas)
module.exports = router;
