const router = require("express").Router();
const UserEventController = require("../../controllers/userEventController");
const verifyAccessToken = require("../../middleware/verifyAccessToken");
router.post("/", verifyAccessToken, UserEventController.addToUserEvent);
router.get("/", verifyAccessToken, UserEventController.getAllUserEvents);

module.exports = router;
