const errorMiddleware = require('./errorMiddleware');
const userValidation = require('./userValidationMiddleware');
const loginValidation = require('./loginValidationMidleware');
const emailPassValidation = require('./emailPassValidation');
const tokenValidation = require('./tokenValidation');

module.exports = {
  errorMiddleware,
  userValidation,
  loginValidation,
  emailPassValidation,
  tokenValidation,
};
