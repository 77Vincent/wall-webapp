import React, { Component } from 'react'

import { Icon, Drawings, Draw } from './components'
import { Noise } from './services'
import './App.css'

const backgroundImage = Noise({
  opacity: 0.1,
  bright: 512,
})

class App extends Component {
  async componentDidMount() {
    const res = await fetch('/api/posts')
    const drawings = await res.json()
    this.setState({ drawings })
  }

  state = {
    drawingX: 0,
    drawingY: 0,
    drawings: [],
    isDrawing: false,
  }

  render() {
    return (
      <div
        className="App"
        onClick={(e) => {
          if (!document.getElementById('App-draw').contains(e.target)) {
            this.setState({
              drawingX: e.pageX,
              drawingY: e.pageY,
              isDrawing: true
            })
          }
        }}
        style={{ backgroundImage }}
      >
        <h1 className="App-title">墙</h1>

        <Draw
          id="App-draw"
          isDrawing={this.state.isDrawing}
          positionX={this.state.drawingX}
          positionY={this.state.drawingY}
        />

        <Drawings
          drawings={this.state.drawings}
        />
        
        <Icon type="question" className="App-button-question"/>
      </div>
    )
  }
}

export default App
