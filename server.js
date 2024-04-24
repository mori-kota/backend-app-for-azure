const express = require('express');
const app = express();
const cors = require('cors');

const errorHandler = require('./_middleware/error-handler');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// API ルート
app.use('/inquiry', require('./inquiries/inquiries.controller'));

// エラーハンドラ
app.use(errorHandler);

// サーバを起動する。
const port = process.env.NODE_ENV === 'production' ? 80 : 8000;

app.listen(port, function () {
  console.log(`ポート ${port} でリッスンします。`);
});