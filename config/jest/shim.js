// set global in case of animation loaded for testing
global.requestAnimationFrame = callback => {
	setTimeout(callback, 0)
}
