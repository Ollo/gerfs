import React from 'react'
import PropTypes from 'prop-types'

const PageUser = (props) => {
  const { queries: { userId } } = props
  return (
    <div style={{ padding: '20px' }}>
      <h5>Profile for User ID: { userId }</h5>
    </div>
  )
}

PageUser.propTypes = {
  queries: PropTypes.shape({})
}

export default PageUser
