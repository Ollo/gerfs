import React, { PureComponent } from 'react'
import { Link } from 'redux-json-router'

import Icon from 'components/Icon'

import './AppNavigation.scss'

class AppNavigation extends PureComponent {

  render () {
    return (
      <nav role='navigation' className='App-Header--wrapper'>
        <div className='container App-Header'>
          <figure className='App-Logo'>
            <h1 className='App-Logo--title'>
              <Link to='/'>Gerfs</Link>
            </h1>
            <h3 className='App-Logo--tagline'>sensible gif management</h3>
          </figure>

          <figure>
            <Link to='/user?userId=1234'>
              <Icon name='user' style={ { width: '30px', height: 'auto' } }/>
            </Link>
          </figure>

        </div>
      </nav>
    )
  }

}

export default AppNavigation
