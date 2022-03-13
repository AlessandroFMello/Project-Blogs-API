const postValidation = require('../schemas/postValidation');

module.exports = (req, res, next) => {
  const { error } = postValidation.validate(req.body);

  if (error) {
    const [code, errorMessage] = error.message.split('|');
    return res.status(code).json({ message: errorMessage });
  }
  next();
};