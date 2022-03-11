const Joi = require('joi');

module.exports = Joi.object({
  email: Joi.string().email().empty('').required()
.messages({
    'any.required': '400|"email" is required',
    'string.base': '422|"email" must be a string',
    'string.email': '400|"email" must be a valid email',
  }),
  password: Joi.string().empty('').min(6).required()
.messages({
    'any.required': '400|"password" is required',
    'string.base': '422|"password" must be a string',
    'string.min': '400|"password" length must be 6 characters long',
  }),
});