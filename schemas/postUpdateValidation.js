const Joi = require('joi');

module.exports = Joi.object({
  title: Joi.string().required().messages({
    'any.required': '400|"title" is required',
    'string.base': '422|"title" must be a string',
  }),
  categoryIds: Joi.forbidden().messages({
    'any.unknown': '400|Categories cannot be edited',
  }),
  content: Joi.string().required().messages({
    'any.required': '400|"content" is required',
    'string.base': '422|"content" must be a string',
  }),
});