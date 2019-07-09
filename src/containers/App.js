import React from 'react'

const App = ({ name, isLoaded }) => {
	return (
		<div className="app">
			React with Webpack from {name}-{isLoaded}
		</div>
	)
}
export default App
