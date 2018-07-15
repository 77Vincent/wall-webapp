import React, { Component } from 'react'
import Draggable from 'react-draggable'

import { Icon, Drawings, Draw } from './components'
import { Noise } from './services'
import './App.css'

const backgroundImage = Noise({
  opacity: 0.1,
  bright: 2000,
})

class App extends Component {
  async componentDidMount() {
    await this.stateSetter.getDrawings(this.state.currentWallId)
  }

  state = {
    currentWallId: 1,
    clickTimes: 0,
    drawingX: 0,
    drawingY: 0,
    drawings: [],
    isDrawing: false,
  }

  stateSetter = {
    getDrawings: async (wallId = 1) => {
      const res = await fetch(`/api/posts?wallId=${wallId}`)
      const drawings = await res.json()
      this.setState({ drawings })
    },
    updateDrawings: async (drawing = {}) => {
      await fetch('/api/posts', {
        method: 'PUT',
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(drawing)
      })
      await this.stateSetter.getDrawings(this.state.currentWallId)
    },
    isDrawing: (boolean) => this.setState({ isDrawing: boolean }) 
  }

  toggleDrawBox = (e) => {
    const textarea = document.getElementById('App-draw-textarea')
    const tools = document.getElementById('App-draw-tools')

    if (!this.state.isDrawing) {
      this.setState({
        isDrawing: true,
        drawingX: e.pageX,
        drawingY: e.pageY,
      })
    } else if (e.target !== textarea && e.target !== tools) {
      this.setState({ isDrawing: false })
    }
  }

  render() {
    return (
      <div
        className="App"
        onClick={this.toggleDrawBox}
        style={{ backgroundImage }}
      >
        <h1 className="App-title">墙</h1>

        <Draw
          stateSetter={this.stateSetter}
          isDrawing={this.state.isDrawing}
          drawingX={this.state.drawingX}
          drawingY={this.state.drawingY}
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
