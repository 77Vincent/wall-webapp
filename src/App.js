import React, { Component } from 'react'

import { Posts, Header, Writing, Loading, Info } from './components'
import { Noise, Request } from './services'
import './App.css'

const backgroundImage = Noise({
  opacity: 0.1,
  bright: 2000,
})

class App extends Component {
  async componentDidMount() {
    this.setState({ isLoading: true })
    const posts = await Request.getPost({ isShuffle: 1 })
    this.setState({ posts })
    this.setState({ isLoading: false })

    document.getElementsByTagName('body')[0].addEventListener('click', (e) => {
      if (!excludedArea.contains(e.target)) {
        this.setState({ isWriting: false })
      }
      this.setState({ isInfoShown: false })
    })
    const excludedArea = document.getElementsByClassName('App-writing')[0]
  }

  state = {
    posts: [],
    isLoading: false,
    isWriting: false,
    isInfoShown: false,
  }

  stateSetter = {
    posts: (payload = []) => this.setState({ posts: payload }),
    isLoading: (boolean = true) => this.setState({ isWriting: boolean }),
    isWriting: (boolean = true) => this.setState({ isWriting: boolean }),
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

        <Writing
          posts={this.state.posts}
          stateSetter={this.stateSetter}
          isWriting={this.state.isWriting}
        />

        <Posts
          isShown={!this.state.isInfoShown}
          stateSetter={this.stateSetter}
          posts={this.state.posts}
        />
        
      </div>
    )
  }
}

export default App
