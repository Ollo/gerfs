import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import PageHeader from 'components/PageHeader'
import { connect } from 'react-redux'
import { createGif } from 'state/gifs/actions'
import { push } from 'redux-json-router'

class PageAdd extends PureComponent {

  state = {
    name: '',
    description: ''
  }

  handleSubmit = (e) => {
    const { createGif, push } = this.props
    const { title, url } = e.target

    e.preventDefault()

    return createGif({ name: title.value, url: url.value })
      .then(data => push('/'))
  }

  render () {
    return (
      <section className='page'>
        <PageHeader title='Add Gif' />
        <form onSubmit={ this.handleSubmit }>
          
          <label>Title</label>
          <input
            type='text'
            id='title'
            name='title' />

          <label>Url:</label>
          <input 
            type='text'
            id='url' 
            name='url' />

          <button type='submit' >Save</button>
        </form>
      </section>
    )
  }

}

PageAdd.propTypes = {
  createGif: PropTypes.func.isRequired,
  push: PropTypes.func.isRequired
}

export default connect(null, { createGif, push })(PageAdd)
