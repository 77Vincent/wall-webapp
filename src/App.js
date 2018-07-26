import React, { Component } from 'react'

import { Drawings, Header, Draw } from './components'
import { Noise, Request } from './services'
import './App.css'

const backgroundImage = Noise({
  opacity: 0.1,
  bright: 2000,
})

class App extends Component {
  async componentDidMount() {
    const drawings = await Request.getPost()
    this.setState({ drawings })
  }

  state = {
    drawings: [],
    isDrawing: false,
  }

  stateSetter = {
    isDrawing: (boolean) => this.setState({ isDrawing: boolean }) 
  }

  render() {
    return (
      <div
        className="App"
        style={{ backgroundImage }}
      >
        <Header
          stateSetter={this.stateSetter}
        />

        <Draw
          stateSetter={this.stateSetter}
          isDrawing={this.state.isDrawing}
        />

        <Drawings
          drawings={this.state.drawings}
        />
        
      </div>
    )
  }
}

export default App
