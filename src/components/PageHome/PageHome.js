import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { push } from 'redux-json-router'

import { loadAllGifs } from 'state/gifs/actions'
import { selectGifs } from 'state/gifs/selectors'
import { selectLoadingApp } from 'state/app/selectors'
import PageHeader from 'components/PageHeader'
import Card from 'components/Card'

class PageHome extends Component {

  componentDidMount () {
    this.props.loadAllGifs()
  }

  renderGifs = (gifs) => {
    if (gifs.length <= 0) {
      return (
        <Card>
          <h3>No Gifs Created Yet.</h3>
          <p>This tracker is for collecting gifs.</p>
          <button
            className='btn btn--blue'
            onClick={ () => this.props.push('/add') }>
            Create one Now
          </button>
        </Card>
      )
    }
    return gifs.map((gif, i) => (
      <Card key={ `${gif.name}-${gif.id}` }>
        <h3>{ gif.name }</h3>
        <small>{ gif.id }</small>
        <img src={ gif.url } />
      </Card>
    ))
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.gifs !== this.props.gifs) {
      this.renderGifs(nextProps.gifs)
    }
  }

  render () {
    const { isLoading, gifs } = this.props
    return (
      <section className='Page'>
        { isLoading
          ? <p>Loading...</p>
          : <div className='Page-Content'>
            <PageHeader title='Home'>
              <button
                className='btn btn--blue'
                onClick={ () => this.props.push('/add') }>
                Add Gif
              </button>
            </PageHeader>
            
            { this.renderGifs(gifs) }
          </div>
        }
      </section>
    )
  }

}

PageHome.propTypes = {
  loadAllGifs: PropTypes.func.isRequired,
  push: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  gifs: PropTypes.array
}

const mapDispatchtoProps = {
  loadAllGifs,
  push
}

const mapStateToProps = (state) => ({
  isLoading: selectLoadingApp(state),
  gifs: selectGifs(state)
})

export default connect(mapStateToProps, mapDispatchtoProps)(PageHome)
