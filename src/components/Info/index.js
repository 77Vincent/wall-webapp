import React from 'react'
import PropTypes from 'prop-types'

import './index.css'

const Info = (props) => {
  props = Object.assign({
    className: '',
    style: {},
    isShown: false,
  }, props)

  return (
    <div
      className={`App-info ${props.className}`}
      style={{ display: props.isShown ? 'block' : 'none' }}
    >
     <h2>Welcome to the Wall</h2>

    <p>This is a place where you can freely express</p>
    <p>Hover on a post then you can like it or dislike it</p>
    <p>The more dislike a post gets, the lower position it will be placed</p>
    <p>No authority, no censorship, values are determined by publics</p>

    <div
      className="App-info-continue"
      onClick={() => {
        props.stateSetter.isInfoShown(false)
      }}
    > Click to continue</div>
    </div>
  )
}

Info.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  isShown: PropTypes.bool,
  stateSetter: PropTypes.object,
}

export default Info
