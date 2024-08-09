require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT;

const indexRouter = require('./routes/index.routes');
const serverConfig = require('./config/serverConfig');

serverConfig(app);

app.use('/api', indexRouter);

app.use('/public', express.static(path.join(__dirname, 'public')));

// всегда внизу
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту: ${PORT}`);
});
