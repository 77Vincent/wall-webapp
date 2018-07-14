import React from 'react'
import PropTypes from 'prop-types'

import './index.css'

const Draw = (props) => {
  return (
    <div
      style={Object.assign({ display: props.isDisplayed ? 'block' : 'none' }, props.style)}
      className={`App-Draw ${props.className}`}
    >
      <div className="App-Draw-wrapper">
        <input />
      </div>
    </div>
  )
}

Draw.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  isDisplayed: PropTypes.bool,
}

Draw.defaultProps = {
  className: '',
  style: {},
  isDisplayed: true,
}

export default Draw
