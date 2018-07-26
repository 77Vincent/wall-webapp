import React, { Component } from 'react'

import { Drawings, Header } from './components'
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
    getDrawings: async (wallId) => {
      const res = await fetch(`/api/posts?wallId=${wallId ? wallId : ''}`)
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

  render() {
    return (
      <div
        className="App"
        onClick={this.toggleDrawBox}
        style={{ backgroundImage }}
      >
        <Header />

        <Drawings
          drawings={this.state.drawings}
        />
        
      </div>
    )
  }
}

export default App
