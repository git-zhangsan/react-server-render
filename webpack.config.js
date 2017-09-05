/*
 * @Author: zhanghuiming
 * @Date:   2017-09-05 08:16:05
 * @Last Modified by:   zhanghuiming
 * @Last Modified time: 2017-09-05 14:59:12
 */
var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: {
		app: './src/client',
		vendor: ['react', 'react-dom']
	},
	output: {
		filename: '[name].bundle.js',
		path: path.join(__dirname, 'public')
	},
	resolve: {
		extensions: ['.js', '.css'],
	},
	module: {
		loaders: [{
			test: /\.css$/,
			loader: ExtractTextPlugin.extract("style-loader", "css-loader", "postcss-loader")
		}, {
			test: /\.js?$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
			query: {
				presets: ['react', 'es2015']
			}
		}, ]
	}
}