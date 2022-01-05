const HealthController = require('../controllers/HealthController');

function register(router) {
  router.get('/history/health', async (ctx) => {
    const controller = new HealthController();

    ctx.body = await controller.handle();
  });
}

module.exports = { register };
