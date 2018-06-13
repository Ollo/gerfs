import React from 'react'
import PropTypes from 'prop-types'

const PageUser = (props) => {
  const { queries: { userId } } = props
  return (
    <h1>Profile for { userId }</h1>
  )
}

PageUser.propTypes = {
  queries: PropTypes.shape({})
}

export default PageUser
