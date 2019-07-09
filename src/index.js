// import './assets/index.scss'
// import webpack from './assets/webpack.png'

// let isConfirmed = confirm('you are about to entering Webpack World')
// if (isConfirmed) {
// 	document.body.innerHTML = `<div class="image-container"><img src="${webpack}" alt="logo"/></div>`
// } else {
// 	document.body.innerHTML = '<div class=\'image-container\'>You don\'t deserve to be here</div>'
// }
import React from 'react'
import ReactDOM from 'react-dom'

import './assets/index.scss'
import App from './containers/App'
ReactDOM.render(<App />, document.getElementById('root'))
