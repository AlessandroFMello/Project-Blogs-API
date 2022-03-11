const loginValidation = require('../schemas/loginValidation');

module.exports = (req, res, next) => {
  const { error } = loginValidation.validate(req.body);

  if (error) {
    const [code, errorMessage] = error.message.split('|');
    return res.status(code).json({ message: errorMessage });
  }
  next();
};