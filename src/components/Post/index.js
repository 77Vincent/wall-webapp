import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Request } from '../../services'
import './index.css'

class Post extends Component {
  constructor(props) {
    super(props)
  }

  colors = [
    'crimson',
    'darkslateblue',
  ] 

  static propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    stateSetter: PropTypes.object,
  }

  static defaultProps = {
    className: '',
    style: {},
    stateSetter: {},
  }

  state = {
    textValue: '',
    textColor: '',
  }

  render() {
    const style = Object.assign({
      display: this.props.isPosting ? 'block' : 'none',
    }, this.props.style)

    return (
      <div
        style={style}
        className={`App-draw ${this.props.className}`}
      >
        <textarea
          autoFocus
          placeholder=""
          maxLength={55}
          onChange={(e) => {
            this.setState({ textValue: e.target.value })
          }}
        />

        <div className="App-draw-confirmation">
          <button
            onClick={() => {
              this.props.stateSetter.isPosting(false)
            }}
          >
            不写了
          </button>
          <button
            onClick={async () => {
              this.props.stateSetter.isPosting(false)
              const { textValue, textColor } = this.state

              const res = await Request.createPost({
                content: textValue,
                color: textColor,
              })

              const posts = await Request.getPost()
              this.props.stateSetter.posts(posts)
            }}
          >
            写好了
          </button>
        </div>

        <div className="App-draw-tools">
            <div className="App-color-picker">
              {
                this.colors.map(each => {
                  return (
                    <div
                      className="App-color-picker-btn"
                      onClick={() => {
                        this.setState({ textColor: each })
                      }}
                      style={{ backgroundColor: each }}
                    ></div>
                  )
                })
              }
            </div>

            <div className="App-size-picker">
            </div>

            <div className="App-weight-picker">
            </div>

            <div className="App-opacity-picker">
            </div>

            <div className="App-style-picker">
            </div>
        </div>
      </div>
    )
  }
}

export default Post
