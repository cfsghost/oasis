const config = require('config');
const { RouterService } = require('engined-http');

module.exports = class extends RouterService() {

	async setupRoutes() {

		const router = this.createRouter();

		router.get('/', async (ctx, next) => {

			await ctx.render('index');
		});

		return router;
	}
};
