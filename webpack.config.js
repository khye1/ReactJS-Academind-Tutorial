var webpack = require('webpack');
var path = require('path');

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

var config = {
	devtool: 'source-map',
	entry: SRC_DIR + "/app/index.js",
	output: {
		path: DIST_DIR + "/app",
		filename: "bundle.js",
		publicPath: "/app/"
	},
	modules: {
		loaders: [
			{
				test: /\.js?/,
				include: SRC_DIR,
				loader: "babel-loader",
				query: {
					presets: ["react", "es2015", "stage-2"]
				}
			}
		]
	}
};

module.exports = config;

/* Stuck at -d --devtool config
module.exports = {
	devtool: ' ',
	entry: './js/app.js',
	output:
	{
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js'
	},
	module:
	{
		loaders:
			[{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }]
	}
};
*/ 

