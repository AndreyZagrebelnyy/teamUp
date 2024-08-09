const router = require("express").Router();
const favouriteController = require("../../controllers/favouriteController");
const verifyAccessToken = require("../../middleware/verifyAccessToken");

router
  .post("/", verifyAccessToken, favouriteController.createFavourite)
  .delete("/", verifyAccessToken, favouriteController.deleteFavourite);

module.exports = router;
