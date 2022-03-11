const errorMiddleware = require('./errorMiddleware');
const userValidation = require('./userValidationMiddleware');
const loginValidation = require('./loginValidationMidleware');
const tokenValidation = require('./tokenValidation');

module.exports = {
  errorMiddleware,
  userValidation,
  loginValidation,
  tokenValidation,
};
