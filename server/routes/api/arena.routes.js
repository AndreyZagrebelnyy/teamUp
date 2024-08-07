const router = require("express").Router();
const arenaController = require("../../controllers/arenaController");
const verifyAccessToken = require("../../middleware/verifyAccessToken");

router
  .get("/", arenaController.getAllArenas)
  .get("/:eventId", arenaController.getArenaById)
  .post("/", arenaController.createArena)
  .put("/:arenaId", verifyAccessToken, arenaController.updateArena)
  .delete("/:arenaId", verifyAccessToken, arenaController.deleteArena);

module.exports = router;
