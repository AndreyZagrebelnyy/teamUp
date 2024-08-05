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



// const express = require('express');
// const profileController = require('../../controllers/profileController');
// const verifyAccessToken = require('../../middleware/verifyAccessToken');
// const multer = require('multer');
// const path = require('path');

// const router = express.Router();


// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, path.join(__dirname, '../../../client/public/profilePhoto'));
//   },
//   filename: (req, file, cb) => {
//     cb(null, `${Date.now()}-${file.originalname}`);
//   },
// });

// const upload = multer({ storage });


// router.post('/upload', upload.single('image'), profileController.uploadProfilePhoto);

// router
//   .get('/', profileController.getAllProfiles)
//   .post('/', verifyAccessToken, profileController.createProfile)
//   .put('/:userId', verifyAccessToken, profileController.updateProfile)
//   .delete('/:userId', verifyAccessToken, profileController.deleteProfile);

// module.exports = router;
