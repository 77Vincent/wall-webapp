import React from 'react'
import uuidv4 from 'uuid/v4'
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
            key={uuidv4()}
            defaultPosition={{x: each.positionX, y: each.positionY}}
          >
            <div
              style={{
                color: each.color,
                fontSize: each.fontSize,
                fontWeight: each.fontWeight,
                fontStyle: each.isItalic,
              }}
              className="App-drawing"
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
