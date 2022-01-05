const joi = require('joi');

const Validator = require('./Validator');

class HistoryValidator extends Validator {
  rules = joi.object().keys({
    userId: joi.number().positive().required(),
    limit: joi.number().positive().required(),
  });
}

module.exports = HistoryValidator;
