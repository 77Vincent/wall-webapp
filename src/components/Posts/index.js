import React, { Component } from 'react'
import PropTypes from 'prop-types'

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
              <section
                key={each._id}
                style={{
                  fontSize: `${each.fontSize}px`,
                  fontWeight: each.fontWeight,
                  color: `${each.color}`,
                  opacity: each.opacity,
                }}
              >
                {each.content}
              </section>
            )
          })
        }
      </div>
    )
  }
}

export default Posts
