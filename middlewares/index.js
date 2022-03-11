const errorMiddleware = require('./errorMiddleware');
const userValidation = require('./userValidationMiddleware');
const loginValidation = require('./loginValidationMidleware');
const emailPassValidation = require('./emailPassValidation');

module.exports = {
  errorMiddleware,
  userValidation,
  loginValidation,
  emailPassValidation,
};
