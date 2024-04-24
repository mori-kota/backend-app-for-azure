const db = require('../_helpers/db');

module.exports = {
  getAll,
  create
};

async function getAll() {
  return await db.Inquiry.findAll();
}

async function create(params) {
  const inquiry = new db.Inquiry(params);
  // お問い合わせを保存する。
  await inquiry.save();
}