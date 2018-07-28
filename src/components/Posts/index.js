import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Icon } from '../'

import './index.css'

class Posts extends Component {
  static propTypes = {
    posts: PropTypes.array,
    className: PropTypes.string,
  }

  static defaultProps = {
    posts: [],
    className: '',
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
                    <Icon type="like" size="22" />
                    <span>{each.like ? each.like : 0}</span>
                    <Icon type="dislike" size="22" />
                    <span>{each.dislike ? each.dislike : 0}</span>
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
