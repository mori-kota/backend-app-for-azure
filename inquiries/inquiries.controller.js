const express = require('express');
const router = express.Router();

const inquiryService = require('./inquiry.service');

// ルート
router.get('/', getAll);
router.post('/', create);

module.exports = router;

// ルート関数
function getAll(req, res, next) {
  inquiryService.getAll()
    .then(inquiries => res.json(inquiries))
    .catch(next);
}

function create(req, res, next) {
  inquiryService.create(req.body)
    .then(() => res.json({ message: '受け付けました。', status: 'OK' }))
    .catch(next);
}