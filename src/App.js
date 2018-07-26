import React, { Component } from 'react'

import { Postings, Header, Post } from './components'
import { Noise, Request } from './services'
import './App.css'

const backgroundImage = Noise({
  opacity: 0.1,
  bright: 2000,
})

class App extends Component {
  async componentDidMount() {
    const postings = await Request.getPost()
    this.setState({ postings })
  }

  state = {
    postings: [],
    isPosting: false,
  }

  stateSetter = {
    isPosting: (boolean) => this.setState({ isPosting: boolean }) 
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

        <Post
          stateSetter={this.stateSetter}
          isPosting={this.state.isPosting}
        />

        <Postings
          postings={this.state.postings}
        />
        
      </div>
    )
  }
}

export default App
