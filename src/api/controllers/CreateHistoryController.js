const { History } = require('../../database/models');

class CreateHistoryController {
  async handle(input) {
    return History.create(input);
  }
}

module.exports = CreateHistoryController;
