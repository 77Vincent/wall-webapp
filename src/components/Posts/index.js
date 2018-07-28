import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Icon } from '../'
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
              <div className="App-posts-block"
                key={each._id}
              >
                <div
                  style={{
                    fontSize: `${each.fontSize}px`,
                    fontWeight: each.fontWeight,
                    color: `${each.color}`,
                    opacity: each.opacity,
                  }}
                >
                  {each.content}
                </div>

                <div className="App-posts-block-hover">
                  <div className="App-posts-block-hover-wrap">
                    <Icon type="like" size="22" onClick={async () => {
                      await Request.updatePost(each._id, { like: each.like + 1 })
                      const posts = await Request.getPost()
                      this.props.stateSetter.posts(posts)
                    }} />
                    <span>{each.like}</span>

                    <Icon type="dislike" size="22" onClick={async () => {
                      await Request.updatePost(each._id, { dislike: each.dislike + 1 })
                      const posts = await Request.getPost()
                      this.props.stateSetter.posts(posts)
                    }} />

                    <span>{each.dislike}</span>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default Posts
