const { resolve } = require('path')
const dev = require('./env/dev')
const prod = require('./env/prod')

const devEnv = {},
	prodEnv = {}

Object.keys(prod).map(key => {
	prodEnv[key] = JSON.stringify(prod[key])
})

Object.keys(dev).map(key => {
	devEnv[key] = JSON.stringify(dev[key])
})

module.exports = {
	dev: devEnv,
	prod: prodEnv
}
