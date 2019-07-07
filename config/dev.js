const merge = require('webpack-merge')
const webpack = require('webpack')
const common = require('./commonConfig')
const envVariables = require('./envVariables')
const { resolve } = require('path')

module.exports = env => {
	return merge(common, {
		mode: 'development',
		entry: ['webpack-dev-server/client?http://localhost:8080', 'index.js'],
		devServer: {
			hot: true,
			historyApiFallback: true
		},
		devtool: '#@cheap-module-eval-source-map',
		plugins: [
			new webpack.HotModuleReplacementPlugin(), // enable hot module.
			new webpack.NamedModulesPlugin(), // prints hotmodule names during reloading.
			new webpack.DefinePlugin(envVariables[env])
		]
	})
}
