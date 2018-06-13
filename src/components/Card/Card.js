import React from 'react'
import PropTypes from 'prop-types'

import './Card.scss'

const Card = ({ children }) => (
  <article className='card'>
    { children }
  </article>
)

Card.propTypes = {
  children: PropTypes.node
}

export default Card
