var webpack = require('webpack')
const merge = require('webpack-merge')
const envVariables = require('./envVariables')

const commonConfig = require('./commonConfig')
var HtmlWebpackPlugin = require('html-webpack-plugin')

var { resolve } = require('path')

module.exports = merge(commonConfig, {
	entry: 'index.js',
	mode: 'production',
	output: {
		path: resolve(__dirname, '../dist'),
		filename: 'js/[name].bundle.js',
		chunkFilename: 'js/[name].chunk.js',
		publicPath: '/'
	},
	devtool: 'source-map',
	plugins: [new webpack.DefinePlugin(envVariables.prod)]
})
