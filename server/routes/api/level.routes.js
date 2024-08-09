const router = require("express").Router();
const LevelController = require("../../controllers/levelController");

router.get("/", LevelController.getAllLevel);

module.exports = router;
