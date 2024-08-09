const multer = require('multer');
const path = require('path');

// Настройка хранения файлов
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const arenaPhotosPath = path.join(__dirname, '../public/img');
    cb(null, arenaPhotosPath); // Путь для сохранения файлов
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // Уникальное имя файла
  },
});

const upload = multer({ storage });

module.exports = upload.array('images'); // Используем .array для множественной загрузки
