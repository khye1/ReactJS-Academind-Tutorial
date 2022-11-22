import webpack from 'webpack';
import { resolve } from 'path';

var DIST_DIR = resolve(__dirname, "dist");
var SRC_DIR = resolve(__dirname, "src");

var config = {
	mode: 'development',
	devtool: 'source-map',
	debug: true,
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

export default config;

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

