import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './index.css'

class Draw extends Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
    isDrawing: PropTypes.bool,
    positionX: PropTypes.number.isRequired,
    positionY: PropTypes.number.isRequired,
  }

  static defaultProps = {
    className: '',
    id: '',
    style: {},
    isDrawing: false,
  }

  render() {
    const style = Object.assign({
      display: this.props.isDrawing ? 'block' : 'none',
      left: this.props.positionX, 
      top: this.props.positionY, 
    }, this.props.style)

    return (
      <div
        id={this.props.id}
        style={style}
        className={`App-draw ${this.props.className}`}
      >
        <div className="App-draw-tools">

        </div>

        <textarea
          className="App-draw-textarea"
          placeholder="写想说的话"
          maxLength={55}
        />
      </div>
    )
  }
}

export default Draw
