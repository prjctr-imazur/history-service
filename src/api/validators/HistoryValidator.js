const joi = require('joi');

const RequestValidator = require('./RequestValidator');

class HistoryValidator extends RequestValidator {
  rules = joi.object().keys({
    query: joi.object({
      userId: joi.number().positive().required(),
      limit: joi.number().positive().optional(),
    }),
  });
}

module.exports = HistoryValidator;
