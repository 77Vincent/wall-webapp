import React from 'react'
import PropTypes from 'prop-types'

import './index.css'
import question from '../../images/question-mark.svg'
import cancel from '../../images/cancel.svg'
import confirm from '../../images/confirm.svg'
import refresh from '../../images/refresh.svg'
import info from '../../images/info.svg'
import add from '../../images/add.svg'
import like from '../../images/like.svg'
import dislike from '../../images/dislike.svg'

const types = { question, cancel, confirm, refresh, info, add, like, dislike }

const Icon = (props) => {
  props = Object.assign({
    className: '',
    style: {},
    isDisabled: false,
    onClick: () => {},
    size: 27,
  }, props)

  const style = Object.assign({
    opacity: props.isDisabled ? 0.3 : 1,
    width: `${props.size}px`,
    height: `${props.size}px`,
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
      <div
        className="App-icon-title"
        style={{
          padding: props.title ? '3px 7px' : '0'
        }}
      >
        {props.title}
      </div>
    </div>
  )
}

Icon.propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,
  size: PropTypes.number,
  title: PropTypes.string,
}

export default Icon
