const userValidation = require('../schemas/userValidation');

module.exports = (req, res, next) => {
  const { error } = userValidation.validate(req.body);

  if (error) {
    const [code, errorMessage] = error.message.split('|');
    return res.status(code).json({ message: errorMessage });
  }
  next();
};