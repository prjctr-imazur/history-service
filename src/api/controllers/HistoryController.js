const { History } = require('../../database/models');

class HistoryController {
  async handle({ userId, limit }) {
    return History.findAll({ where: { userId }, limit });
  }
}

module.exports = HistoryController;
