const { validate } = require('../middleware/validation');

const CreateHistoryValidator = require('../validators/CreateHistoryValidator');
const CreateHistoryController = require('../controllers/CreateHistoryController');
const HistoryValidator = require('../validators/HistoryValidator');
const HistoryController = require('../controllers/HistoryController');

function register(router) {
  router.get('/history', validate(new HistoryValidator()), async (ctx) => {
    const controller = new HistoryController();

    const data = await controller.handle(ctx.request.query);

    ctx.body = { data };
  });

  router.post(
    '/history',
    validate(new CreateHistoryValidator()),
    async (ctx) => {
      const controller = new CreateHistoryController();
      const data = await controller.handle(ctx.request.body);

      ctx.body = {
        data,
      };
    }
  );
}

module.exports = { register };
