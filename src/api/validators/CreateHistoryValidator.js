const joi = require('joi');

const Validator = require('./Validator');

class CreateHistoryValidator extends Validator {
  rules = joi.object().keys({
    userId: joi.number().required(),
    videoId: joi.number().required(),
  });
}

module.exports = CreateHistoryValidator;
