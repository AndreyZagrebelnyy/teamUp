const router = require("express").Router();
const arenaDateController = require("../../controllers/arenaDateController");
const verifyAccessToken = require("../../middleware/verifyAccessToken");


router
  .post("/:arenaId", arenaDateController.createArenaDate)

module.exports = router;
