import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  componentDidMount = async () => {
    const posts = await fetch('/api/posts')
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">墙</h1>
        </header>


      </div>
    );
  }
}

export default App;
