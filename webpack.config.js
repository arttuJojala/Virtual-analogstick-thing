const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const PolyfillsPlugin = require('webpack-polyfills-plugin');

var config = {
    module: {},
};

let cssConfig = Object.assign({}, config, {
	entry: ['./style/main.scss'],
	output: {
		path: __dirname + "/public",
		filename: 'bundle.css'
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader', 'sass-loader']
				})
			}
		]
	},
	plugins: [
		new ExtractTextPlugin({
			filename: 'bundle.css'
		}),
	]
});
let jsxConfig = Object.assign({}, config, {
	entry: ["babel-polyfill",'./views/App.jsx'],
	output: {
		path: __dirname,
		filename: 'public/bundle.js'
	},
	module: {
		rules: [
			{
				test: /.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['env', 'react', 'stage-2']
				},
			}
		]
	},
	plugins: [
		new PolyfillsPlugin([
			'Array/prototype/forEach',
		]),
	]
});

module.exports = [
	cssConfig, jsxConfig,
];