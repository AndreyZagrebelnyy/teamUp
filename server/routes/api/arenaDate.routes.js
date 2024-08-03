const router = require("express").Router();
const arenaController = require("../../controllers/arenaController");
const verifyAccessToken = require("../../middleware/verifyAccessToken");

router
  .post("/:arenaId", arenaDateController.createArenaDate)

module.exports = router;
