import React from 'react'
import Draggable from 'react-draggable'
import PropTypes from 'prop-types'

import './index.css'

const Drawings = (props) => {
  return (
    <div 
      style={props.style}
      className={`App-Drawings ${props.className}`}
    >
      {
        props.drawings.map(each => (
          <Draggable 
            defaultPosition={{x: 100, y: 200}}
          >
            <div
              className="App-drawing"
              style={{}}
            >
              {each.content}
            </div>
          </Draggable>
        ))
      }
    </div>
  )
}

Drawings.propTypes = {
  drawings: PropTypes.array,
  className: PropTypes.string,
  style: PropTypes.object,
}

Drawings.defaultProps = {
  drawings: [],
  className: '',
  style: {}
}

export default Drawings
