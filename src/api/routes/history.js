const { validate } = require('../middleware/validation');
const { respond } = require('../helpers/respond');

const CreateHistoryValidator = require('../validators/CreateHistoryValidator');
const CreateHistoryController = require('../controllers/CreateHistoryController');
const HistoryValidator = require('../validators/HistoryValidator');
const HistoryController = require('../controllers/HistoryController');

const ForeverCacheDecorator = require('../../decorators/ForeverCacheDecorator');
const RemoveCacheDecorator = require('../../decorators/RemoveCacheDecorator');

function register(router) {
  router.get('/history', validate(new HistoryValidator()), async (ctx) => {
    const { userId, limit } = ctx.request.query;

    const controller = new ForeverCacheDecorator(
      new HistoryController(),
      `users.${userId}.history`
    );

    const data = await controller.handle({ userId, limit });

    return data ? respond(ctx, data) : respond(ctx, null, 404);
  });

  router.post(
    '/history',
    validate(new CreateHistoryValidator()),
    async (ctx) => {
      const { userId, videoId } = ctx.request.body;

      const controller = new RemoveCacheDecorator(
        new CreateHistoryController(),
        `users.${userId}.history`
      );

      const data = await controller.handle({ userId, videoId });

      return data ? respond(ctx, data) : respond(ctx, null, 400);
    }
  );
}

module.exports = { register };
