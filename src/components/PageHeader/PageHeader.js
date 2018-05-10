import React from 'react'
import PropTypes from 'prop-types'
import './PageHeader.scss'

const PageHeader = ({ title, className, children, ...otherProps }) => (
  <header className={ className ? `${className} Page-Header` : 'Page-Header'} { ...otherProps}>
    <h2 className='Page-Header--title'>{ title }</h2>
    <aside>{ children && children }</aside>
  </header>
)

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string
}

export default PageHeader
