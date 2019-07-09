import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'
import App from '../src/containers/App'

const stories = storiesOf('App', module)
stories.addDecorator(withInfo)
stories.addDecorator(withKnobs)

stories.add('App with Animation', () => (
	<App name={text('Name', 'Anything')} isLoaded={boolean('isLoaded', true)} />
))
