import React, { Component } from 'react'
import uuidv4 from 'uuid/v4'
import PropTypes from 'prop-types'

import './index.css'

const DIAGONAL = Math.sqrt(Math.pow(window.innerHeight, 2) + Math.pow(window.innerWidth, 2)) / 2

class Drawings extends Component {
  static propTypes = {
    drawings: PropTypes.array,
    className: PropTypes.string,
  }

  static defaultProps = {
    drawings: [],
    className: '',
  }

  state = {
    speedX: 0,
    speedY: 0,
    offsetX: 0,
    offsetY: 0,
  }

  componentDidMount() {
    const moving = setInterval(() => {
      this.setState({
        offsetX: this.state.offsetX - this.state.speedX,
        offsetY: this.state.offsetY + this.state.speedY,
      })
    }, 10)
  }

  getSpeed(vector, coefficient) {
    const max = 1.1
    const min = 0.05
    const BASE_SPEED = 5
    const speed = BASE_SPEED * vector * coefficient
    if (speed > max) {
      return max 
    } else if (speed < -max) {
      return -max 
    } else if (speed > 0 && speed < min) {
      return 0 
    } else if (speed < 0 && speed > -min) {
      return 0
    } else {
      return speed
    }
  }

  render() {
    return (
      <div 
        style={{
          transform: `translate(${this.state.offsetX}px, ${this.state.offsetY}px)`
        }}
        className={`App-drawings ${this.props.className}`}
        onMouseMove={(e) => {
          const x = e.screenX - window.innerWidth / 2
          const y = window.innerHeight / 2 - e.screenY 
          const distance = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2))
          const mul = Math.pow(distance / window.innerHeight, 2)

          this.setState({
            speedX: this.getSpeed(x / distance, mul),
            speedY: this.getSpeed(y / distance, mul),
          })
        }}
      >
        {
          this.props.drawings.map(each => {
            return (
              <div
                key={uuidv4()}
                className="App-drawing"
                style={{
                  top: each.positionY,
                  left: each.positionX,
                }}
              >
                {each.content}
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default Drawings
