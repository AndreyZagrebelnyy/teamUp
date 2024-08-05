const router = require("express").Router();
const dateController = require("../../controllers/dateController");
// const verifyAccessToken = require("../../middleware/verifyAccessToken");

router
  .post("/:arenaId", dateController.createDate)

module.exports = router;
