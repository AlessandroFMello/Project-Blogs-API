const errorMiddleware = require('./errorMiddleware');
const userValidation = require('./userValidationMiddleware');
const loginValidation = require('./loginValidationMidleware');
const categoryValidation = require('./categoryValidation');
const postValidation = require('./postValidationMiddleware');
const tokenValidation = require('./tokenValidation');
const postUpdateValidation = require('./postUpdateValidationMiddleware');

module.exports = {
  errorMiddleware,
  userValidation,
  loginValidation,
  tokenValidation,
  categoryValidation,
  postValidation,
  postUpdateValidation,
};
