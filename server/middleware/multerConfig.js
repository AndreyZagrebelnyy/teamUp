const multer = require('multer');
const path = require('path');
const fs = require('fs');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const arenaPhotosPath = path.join(__dirname, '../../client/public/foto', req.body.title);
    
    if (!fs.existsSync(arenaPhotosPath)) {
      fs.mkdirSync(arenaPhotosPath, { recursive: true });
    }
    cb(null, arenaPhotosPath);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage }).array('images', 10);

module.exports = upload;
