import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Icon } from '../'
import { Request } from '../../services'

import './index.css'

class Post extends Component {
  static propTypes = {
    stateSetter: PropTypes.object,
    post: PropTypes.object,
    className: PropTypes.string,
  }

  static defaultProps = {
    post: {},
    className: '',
    stateSetter: {},
  }

  state = {
    isDisabled: false,
    like: this.props.post.like,
    dislike: this.props.post.dislike,
  }

  render() {
    const { post } = this.props

    return (
      <div className={`App-post ${this.props.className}`}>
        <div
          style={{
            fontSize: `${post.fontSize}px`,
            fontWeight: post.fontWeight,
            color: `${post.color}`,
            opacity: post.opacity,
          }}
        >
          {post.content}
        </div>

        <div className="App-post-hover">
          <div className="App-post-hover-wrap">
            <Icon
              type="like"
              size="22"
              isDisabled={this.state.isDisabled}
              onClick={async () => {
                this.setState({ isDisabled: true })
                const value = this.state.like + 1
                await Request.updatePost(post._id, { like: value })
                this.setState({ like: value })
                setTimeout(() => {
                  this.setState({ isDisabled: false })
                }, 300);
              }} />
            <span>{this.state.like}</span>

            <Icon
              type="dislike"
              size="22"
              isDisabled={this.state.isDisabled}
              onClick={async () => {
                this.setState({ isDisabled: true })
                const value = this.state.dislike + 1
                await Request.updatePost(post._id, { dislike: value })
                this.setState({ dislike: value })
                setTimeout(() => {
                  this.setState({ isDisabled: false })
                }, 300);
              }} />

            <span>{this.state.dislike}</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Post
