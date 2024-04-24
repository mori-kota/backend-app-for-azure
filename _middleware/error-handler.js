module.exports = errorHandler;

function errorHandler(err, req, res, next) {
  if (typeof err === 'string' && err.toLowerCase().endsWith('not found')) {
    return res.status(404).json({ message: err, status: 'ERROR' });

  } else {
    return res.status(500).json({ message: err.message, status: 'ERROR' });
  }
}