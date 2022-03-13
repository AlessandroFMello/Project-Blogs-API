const Joi = require('joi');

module.exports = Joi.object({
  title: Joi.string().required().messages({
    'any.required': '400|"title" is required',
    'string.base': '422|"title" must be a string',
  }),
  categoryIds: Joi.array().min(1).required()
  .messages({
    'any.required': '400|"categoryIds" is required',
    'array.base': '400|"categoryIds" must be an array',
    'array.min': '400|"categoryIds" array must have at least 1 value',
  }),
  content: Joi.string().required().messages({
    'any.required': '400|"content" is required',
    'string.base': '422|"content" must be a string',
  }),

});