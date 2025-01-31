/* eslint-disable no-undef */
const Joi = require("joi");

const bookSchema = Joi.object({
  title: Joi.string().required(),
  author: Joi.string().required(),
  year: Joi.number().required(),
  genre: Joi.string().required(),
});

module.exports = { bookSchema };
