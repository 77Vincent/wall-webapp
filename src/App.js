import React, { Component } from 'react'

import { Posts, Header, Post, Loading, Info } from './components'
import { Noise, Request } from './services'
import './App.css'

const backgroundImage = Noise({
  opacity: 0.1,
  bright: 2000,
})

class App extends Component {
  async componentDidMount() {
    this.setState({ isLoading: true })
    const posts = await Request.getPost()
    this.setState({ posts })
    this.setState({ isLoading: false })

    document.getElementsByTagName('body')[0].addEventListener('click', (e) => {
      if (!excludedArea.contains(e.target)) {
        this.setState({ isPosting: false })
      }
      this.setState({ isInfoShown: false })
    })
    const excludedArea = document.getElementsByClassName('App-post')[0]
  }

  state = {
    posts: [],
    isLoading: false,
    isPosting: false,
    isInfoShown: false,
  }

  stateSetter = {
    posts: (payload = []) => this.setState({ posts: payload }),
    isLoading: (boolean = true) => this.setState({ isPosting: boolean }),
    isPosting: (boolean = true) => this.setState({ isPosting: boolean }),
    isInfoShown: (boolean = true) => this.setState({ isInfoShown: boolean }),
  }

  render() {
    return (
      <div
        className="App"
        style={{ backgroundImage }}
      >
        <Loading isLoading={this.state.isLoading} />

        <Info
          isShown={this.state.isInfoShown}
        />

        <Header
          stateSetter={this.stateSetter}
        />

        <Post
          stateSetter={this.stateSetter}
          isPosting={this.state.isPosting}
        />

        <Posts
          stateSetter={this.stateSetter}
          posts={this.state.posts}
        />
        
      </div>
    )
  }
}

export default App
