const { Sequelize } = require('sequelize');

const { dbName, dbConfig } = require('../config.json');

module.exports = db = {};

initialize();

async function initialize() {
  const dialect = 'mssql';
  const host = dbConfig.server;
  const { userName, password } = dbConfig.authentication.options;

  // データベースに接続します。
  const sequelize = new Sequelize(dbName, userName, password, { host, dialect });

  // モデルをエクスポートする DB オブジェクトに追加します。
  db.Inquiry = require('../inquiries/inquiry.model')(sequelize);

  // すべてのモデルをデータベースと同期させます。
  await sequelize.sync({ alter: true });
}