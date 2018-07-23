import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as THREE from 'three'

import './index.css'

class Draw extends Component {
  constructor(props) {
    super(props)
  }

  colors = [
    'crimson',
    'darkslateblue',
  ] 

  static propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    isDrawing: PropTypes.bool,
    drawingX: PropTypes.number.isRequired,
    drawingY: PropTypes.number.isRequired,
    stateSetter: PropTypes.object,
  }

  static defaultProps = {
    className: '',
    style: {},
    isDrawing: false,
    stateSetter: {},
  }

  componentDidMount() {
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 )
    const renderer = new THREE.WebGLRenderer()
    renderer.setSize( window.innerWidth, window.innerHeight )
    this.canvas = renderer.domElement
  }

  render() {
    const style = Object.assign({
      display: this.props.isDrawing ? 'block' : 'none',
    }, this.props.style)

    return (
      <div
        style={style}
        className={`App-draw ${this.props.className}`}
      >
        <textarea
          id="App-draw-textarea"
          className="App-draw-textarea"
          autoFocus
          placeholder="写想说的话"
          maxLength={55}
          onChange={(e) => {
            console.log(e)
          }}
        />

        <div
          id="App-draw-tools"
          className="App-draw-tools"
        >
          <button
            onClick={() => {
              this.props.stateSetter.isDrawing(false)
            }}
          >
            不写了
          </button>
          <button
            onClick={() => {
              this.props.stateSetter.updateDrawings()
              this.props.stateSetter.isDrawing(false)
            }}
          >
            写好了
          </button>
        </div>
      </div>
    )
  }
}

export default Draw
