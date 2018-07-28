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
     <h1>Welcome to the Wall</h1>
     <p></p>
    </div>
  )
}

Info.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  isShown: PropTypes.bool,
}

export default Info
