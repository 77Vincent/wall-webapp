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
            <Icon type="like" size="22" onClick={async () => {
              await Request.updatePost(post._id, { like: post.like + 1 })
              const posts = await Request.getPost()
              this.props.stateSetter.posts(posts)
            }} />
            <span>{post.like}</span>

            <Icon type="dislike" size="22" onClick={async () => {
              await Request.updatePost(post._id, { dislike: post.dislike + 1 })
              const posts = await Request.getPost()
              this.props.stateSetter.posts(posts)
            }} />

            <span>{post.dislike}</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Post
