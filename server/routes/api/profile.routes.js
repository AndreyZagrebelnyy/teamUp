const router = require("express").Router();
const profileController = require("../../controllers/profileController");
const verifyAccessToken = require("../../middleware/verifyAccessToken");
const fileUploadController = require('../../controllers/fileUploadController');


router
  .get("/", profileController.getAllProfiles)
  .post("/", profileController.createProfile)
  .put("/:userId", verifyAccessToken, profileController.updateProfile)
  .delete("/:userId", verifyAccessToken, profileController.deleteProfile)
  .post("/upload", fileUploadController.uploadPhoto)

module.exports = router;