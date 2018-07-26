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
  const style = Object.assign({
    opacity: props.isDisabled ? 0.4 : 1,
  }, props.style)

  return (
    <div
      style={style}
      className={`App-icon ${props.className}`}
    >
      <img 
        src={types[props.type]}
        alt={props.type}
        onClick={props.isDisabled ? () => {} : props.onClick}
      />
    </div>
  )
}

Icon.propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,
}

Icon.defaultProps = {
  className: '',
  style: {},
  isDisabled: false,
  onClick: () => {},
}

export default Icon
