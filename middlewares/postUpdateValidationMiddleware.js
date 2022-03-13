const postUpdateValidation = require('../schemas/postUpdateValidation');

module.exports = (req, res, next) => {
  const { error } = postUpdateValidation.validate(req.body);

  if (error) {
    const [code, errorMessage] = error.message.split('|');
    return res.status(code).json({ message: errorMessage });
  }
  next();
};