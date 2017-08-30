var path = require('path')
var webpack = require('webpack')

const museUiThemePath = path.join(
	__dirname,
	'node_modules',
	'muse-ui',
	'src/styles/themes/variables/light.less'
);

module.exports = {
//	devtool: 'cheap-module-eval-source-map',
	entry: [
		'./src/entry.js'
	],
	output: {
		path: path.join(__dirname, 'static', 'assets'),
		filename: 'bundle.js',
		publicPath: '/assets'
	},
	plugins: [
		new webpack.optimize.OccurrenceOrderPlugin()
	],
	module: {
		loaders: [
			{
				test: /\.js$/,
				loaders: [ 'babel-loader' ],
				exclude: /node_modules/,
				include: __dirname
			},
			{
				test: /muse-ui.src.*?js$/,
				loader: 'babel-loader'
			},
			{
				test: /\.css$/,
				loader: 'css-loader'
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					loaders: {
						less: [
							'vue-style-loader',
							'css-loader',
							{
								loader: 'less-loader',
								options: {
									globalVars: {
										museUiTheme: `'${museUiThemePath}'`,
									}
								}
							}
						]
					}
				}
			}
		],
	},
	resolve: {
		extensions: [ '.js', '.vue', '.json' ],
		alias: {
			'vue': 'vue/dist/vue.js',
			'muse-components': path.resolve(__dirname, 'node_modules/muse-ui/src')
		}
	}
}
