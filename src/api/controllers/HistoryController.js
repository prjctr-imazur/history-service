const { History } = require('../../database/models');

class HistoryController {
  async handle({ userId, limit = 20 }) {
    return History.findAll({ where: { userId }, limit });
  }
}

module.exports = HistoryController;
