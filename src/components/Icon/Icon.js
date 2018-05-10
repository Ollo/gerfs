import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import User from './assets/user.svg'

const icons = {
	user: User
}

class Icon extends PureComponent {
	render () {
		const { name, className, ...other } = this.props
		return (
			
			<img src={ icons[name] } className={ className } { ...other} />
		)
	}
}

export default Icon
