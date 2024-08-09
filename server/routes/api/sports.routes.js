const router = require("express").Router();
const sportController = require("../../controllers/sportController");

router.get("/", sportController.getAllSports);

module.exports = router;
