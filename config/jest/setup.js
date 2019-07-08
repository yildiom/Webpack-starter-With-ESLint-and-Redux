import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { JSDOM } from 'jsdom'

// configure enzyme
configure({ adapter: new Adapter() })

// configure jsdom
const { window } = jsdom

const copyProps = (src, target) => {
	const props = Object.getOwnPropertyNames(src).filter(prop =>
		Object.getOwnPropertyDescriptor(src, prop)
	)

	Object.defineProperties(target, props)
}

global['window'] = window
global['document'] = window.document

copyProps(window, global)

global['window'].resizeTo = (width, height) => {
	global['window'].innerWidth = width || global['window'].innerWidth
	global['window'].innerHeight = height || global['window'].innerHeight
	global['window'].dispatchEvent(new Event('resize'))
}
