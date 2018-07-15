import React from 'react'
import PropTypes from 'prop-types'

import './index.css'
import question from '../../images/question-mark.svg'
import draw from '../../images/draw.png'

const types = {
  question,
  draw,
}

const Icon = (props) => {
  return (
    <img 
      style={props.style}
      className={`App-Icon ${props.className}`}
      src={types[props.type]}
      alt="question"
      onClick={props.onClick}
    />
  )
}

Icon.propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
}

Icon.defaultProps = {
  className: '',
  style: {},
  onClick: () => {},
}

export default Icon
