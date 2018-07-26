import React, { Component } from 'react'
import uuidv4 from 'uuid/v4'
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
                key={uuidv4()}
                style={{
                  fontSize: `${each.fontSize}px`,
                  fontStyle: each.isItalic ? 'italic' : 'normal',
                  fontWeight: each.fontWeight,
                  color: `${each.color}`,
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
