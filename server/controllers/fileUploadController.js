const multer = require('multer');
const path = require('path');


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../../client/public/profilePhoto')); 
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); 
  }
});

const upload = multer({ storage: storage }).single('file');

exports.uploadPhoto = (req, res) => {
  console.log('Получен запрос на загрузку файла');

  upload(req, res, (err) => {
    if (err) {
      console.error('Ошибка multer:', err);
      return res.status(500).json({ error: "Ошибка загрузки файла" });
    }
    if (!req.file) {
      console.error('Файл не был загружен');
      return res.status(400).json({ error: "Файл не был загружен" });
    }
    console.log('Файл успешно загружен:', req.file);
    return res.status(200).json({ message: "Файл успешно загружен" });
  });
};
