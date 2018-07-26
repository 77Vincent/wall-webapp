import React, { Component } from 'react'
import uuidv4 from 'uuid/v4'
import PropTypes from 'prop-types'

import './index.css'

class Drawings extends Component {
  static propTypes = {
    drawings: PropTypes.array,
    className: PropTypes.string,
  }

  static defaultProps = {
    drawings: [],
    className: '',
  }

  render() {
    return (
      <div 
        className={`App-drawings ${this.props.className}`}
      >
        {
          this.props.drawings.map(each => {
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

export default Drawings
