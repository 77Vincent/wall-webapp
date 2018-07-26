import React, { Component } from 'react'
import uuidv4 from 'uuid/v4'
import PropTypes from 'prop-types'

import './index.css'

class Postings extends Component {
  static propTypes = {
    postings: PropTypes.array,
    className: PropTypes.string,
  }

  static defaultProps = {
    postings: [],
    className: '',
  }

  render() {
    return (
      <div 
        className={`App-postings ${this.props.className}`}
      >
        {
          this.props.postings.map(each => {
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

export default Postings
