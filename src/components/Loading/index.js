import React from 'react'
import PropTypes from 'prop-types'
import ReactLoading from 'react-loading'

import './index.css'

const Loading = (props) => {
  props = Object.assign({
    className: '',
    style: {},
    isLoading: false,
  }, props)

  return (
    <div
      className={`App-loading ${props.className}`}
      style={{ display: props.isLoading ? 'block' : 'none' }}
    >
        <ReactLoading
          type={'spin'} color={'#000'} width="30px" height="30px"
          className="App-loading-main"
        />
    </div>
  )
}

Loading.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  isLoading: PropTypes.bool,
}

export default Loading
