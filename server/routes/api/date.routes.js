const router = require("express").Router();
const dateController = require("../../controllers/dateController");
const verifyAccessToken = require("../../middleware/verifyAccessToken");

router
  .get("/", dateController.getAllDates)
  .post("/",verifyAccessToken, dateController.createDate)
  .delete("/:dateId", verifyAccessToken, dateController.deleteDate)

module.exports = router;
