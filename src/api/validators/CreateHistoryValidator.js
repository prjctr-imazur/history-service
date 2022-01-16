const joi = require('joi');

const RequestValidator = require('./RequestValidator');

class CreateHistoryValidator extends RequestValidator {
  rules = joi.object().keys({
    body: joi.object({
      userId: joi.number().required(),
      videoId: joi.number().required(),
    }),
  });
}

module.exports = CreateHistoryValidator;
