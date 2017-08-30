const config = require('config')
const path = require('path');
const HTTPService = require('engined-http').Service;

const Service = HTTPService({
	port: config.get('server').port
});

module.exports = class extends Service {

	async setupCORS() {
		return { origin: '*' };
	}

	async setupBodyParser() {
		return {
			jsonLimit: '50mb',
			textLimit: '50mb'
		};
	}

	async setupViews() {
		return {
			path: path.join(__dirname, '..', 'views'),
			templateEngine: require('pug'),
			options: {
				extension: 'pug',
				map: {
					html: 'pug'
				}
			}
		};
	}

	async setupStaticServe() {
		return {
			path: path.join(__dirname, '..', 'static')
		};
	}

	async listening() {
		console.log('server starting on port ' + config.get('server').port);
	}
};
