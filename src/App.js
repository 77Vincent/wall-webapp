import React, { Component } from 'react'

import { Icon, Drawings } from './components'
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
      <div className="App">
        <h1 className="App-title">墙</h1>

        <Icon type="draw" className="App-button-draw"/>

        <Drawings drawings={this.state.drawings} />
        
        <Icon type="question" className="App-button-question"/>
      </div>
    )
  }
}

export default App
