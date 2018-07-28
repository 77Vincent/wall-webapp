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
     <ul>
      <li>There is no register, all posts are truely anonymous.</li>
      <li>Like or dislike a post as you wish</li>
     </ul>
    </div>
  )
}

Info.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  isShown: PropTypes.bool,
}

export default Info
