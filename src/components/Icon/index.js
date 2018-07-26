import React from 'react'
import PropTypes from 'prop-types'

import './index.css'
import question from '../../images/question-mark.svg'
import post from '../../images/draw.png'
import cancel from '../../images/cancel.svg'
import confirm from '../../images/confirm.svg'
import refresh from '../../images/refresh.svg'
import info from '../../images/info.svg'
import add from '../../images/add.svg'

const types = { question, post, cancel, confirm, refresh, info, add }

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
