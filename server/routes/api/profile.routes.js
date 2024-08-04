const router = require("express").Router();
const profileController = require("../../controllers/profileController");
const verifyAccessToken = require("../../middleware/verifyAccessToken");

router
  .get("/", profileController.getAllProfiles)
  .post("/", profileController.createProfile)
  .put("/:userId", verifyAccessToken, profileController.updateProfile)
  .delete("/:userId", verifyAccessToken, profileController.deleteProfile);

module.exports = router;