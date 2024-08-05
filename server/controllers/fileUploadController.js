const multer = require('multer');
const path = require('path');

// Определение директории и имен файлов для загрузки
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../../client/public/profilePhoto')); // путь к папке, куда сохранять файлы
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname); // сохраняем файл с оригинальным именем
  }
});

// Настройка загрузчика файлов
const upload = multer({ storage }).single('file');

// Контроллер для обработки загрузки файлов
exports.uploadPhoto = (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      return res.status(500).json({ error: "Ошибка загрузки файла" });
    }
    if (!req.file) {
      return res.status(400).json({ error: "Файл не был загружен" });
    }
    return res.status(200).json({ message: "Файл успешно загружен" });
  });
};
