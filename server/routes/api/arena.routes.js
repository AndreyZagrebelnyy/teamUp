const router = require("express").Router();
const arenaController = require("../../controllers/arenaController");
const verifyAccessToken = require("../../middleware/verifyAccessToken");

router
  .get("/", arenaController.getAllArenas)
  .get("/:arenaId", arenaController.getArenaById)
  .post("/", verifyAccessToken, arenaController.createArena)  // Добавлено использование verifyAccessToken для защиты
  .put("/:arenaId", verifyAccessToken, arenaController.updateArena)
  .delete("/:arenaId", verifyAccessToken, arenaController.deleteArena);

module.exports = router;
