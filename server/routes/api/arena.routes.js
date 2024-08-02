const router = require("express").Router();
const arenaController = require("../../controllers/arenaController");

router.get("/", arenaController.getAllArenas);

module.exports = router;
