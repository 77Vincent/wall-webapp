import React, { Component } from 'react'

import { Posts, Header, Post } from './components'
import { Noise, Request } from './services'
import './App.css'

const backgroundImage = Noise({
  opacity: 0.1,
  bright: 2000,
})

class App extends Component {
  async componentDidMount() {
    const posts = await Request.getPost()
    this.setState({ posts })
  }

  state = {
    posts: [],
    isPosting: false,
  }

  stateSetter = {
    posts: (payload = []) => this.setState({ posts: payload }),
    isPosting: (boolean = true) => this.setState({ isPosting: boolean }),
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

        <Posts
          posts={this.state.posts}
        />
        
      </div>
    )
  }
}

export default App
