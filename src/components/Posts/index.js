import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Icon, Post } from '../'
import { Request } from '../../services'

import './index.css'

class Posts extends Component {
  static propTypes = {
    posts: PropTypes.array,
    className: PropTypes.string,
    stateSetter: PropTypes.object,
  }

  static defaultProps = {
    posts: [],
    className: '',
    stateSetter: {},
  }

  render() {
    return (
      <div 
        className={`App-posts ${this.props.className}`}
      >
        {
          this.props.posts.map(each => {
            return (
              <Post
                stateSetter={this.props.stateSetter}
                post={each}
                key={each._id}
              />
            )
          })
        }
      </div>
    )
  }
}

export default Posts
