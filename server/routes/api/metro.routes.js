const router = require("express").Router();
const metroController = require("../../controllers/metroController");

router.get("/", metroController.getAllMetro);

module.exports = router;
