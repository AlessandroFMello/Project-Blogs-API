const categoryValidation = require('../schemas/categoryValidation');

module.exports = (req, res, next) => {
  const { error } = categoryValidation.validate(req.body);

  if (error) {
    const [code, errorMessage] = error.message.split('|');
    return res.status(code).json({ message: errorMessage });
  }
  next();
};