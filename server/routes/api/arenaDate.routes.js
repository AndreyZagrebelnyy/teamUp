const router = require("express").Router();
const arenaDateController = require("../../controllers/arenaDateController");
const dateController = require("../../controllers/dateController");
const verifyAccessToken = require("../../middleware/verifyAccessToken");

router
  .get("/:arenaId", dateController.getArenaDates)
  .post("/:arenaId", arenaDateController.createArenaDate);

module.exports = router;
