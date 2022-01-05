const Router = require('koa-router');

const health = require('./health');
const history = require('./history');

const router = new Router();

health.register(router);
history.register(router);

module.exports = router;
