import React, { Component } from 'react'

import { Icon, Drawings, Draw } from './components'
import { Noise } from './services'
import './App.css'

class App extends Component {
  async componentDidMount() {
    const res = await fetch('/api/posts')
    const drawings = await res.json()
    this.setState({ drawings })
  }

  state = {
    drawings: []
  }

  render() {
    return (
      <div
        className="App"
        style={{
          backgroundImage: Noise({
            opacity: 0.1,
            bright: 512,
          })
        }}
      >
        <h1 className="App-title">墙</h1>

        <Icon type="draw" className="App-button-draw"/>

        <Draw />

        <Drawings drawings={this.state.drawings} />
        
        <Icon type="question" className="App-button-question"/>
      </div>
    )
  }
}

export default App
