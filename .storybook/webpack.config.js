var path = require('path')

module.exports = ({ config, mode }) => {
	config.module.rules.push({
		test: /\.scss$/,
		use: ['style-loader', 'css-loader', 'sass-loader'],
		include: path.resolve(__dirname, '../')
	})
	return config
}
