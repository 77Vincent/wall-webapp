import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Icon, SliderPicker } from '../../components'
import { Request } from '../../services'
import './index.css'

const textSizeMap = { 0: 10, 25: 13, 50: 16, 75: 20, 100: 24 }
const textWeightMap = { 0: 300, 50: 500, 100: 900 }

class Post extends Component {
  constructor(props) {
    super(props)
  }

  colors = [ '#E9967A', '#B22222', '#C71585', '#9370DB', '#4682B4', '#1E90FF', '#20B2AA', '#8FBC8B' ] 

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
    textSize: null,
    textWeight: 500,
  }

  render() {
    const style = Object.assign({
      opacity: this.props.isPosting ? '1' : '0',
      zIndex: this.props.isPosting ? '1' : '-1',
    }, this.props.style)

    const { textValue, textColor, textSize, textWeight } = this.state

    return (
      <div
        style={style}
        className={`App-post ${this.props.className}`}
      >
        <section>
          <textarea
            rows="3"
            autoFocus
            placeholder=""
            maxLength={55}
            style={{
              color: textColor,
              fontSize: textSize,
              fontWeight: textWeight
            }}
            onChange={(e) => {
              this.setState({ textValue: e.target.value })
            }}
          />

          <div className="App-post-confirmation">
            <Icon
              type="confirm"
              isDisabled={!textValue.length}
              onClick={async () => {
                this.props.stateSetter.isPosting(false)

                const res = await Request.createPost({
                  content: textValue,
                  color: textColor,
                  fontSize: textSize,
                  fontWeight: textWeight,
                })

                const posts = await Request.getPost()
                this.props.stateSetter.posts(posts)
              }}
            />

            <Icon
              type="cancel"
              onClick={() => {
                this.props.stateSetter.isPosting(false)
              }}
            />
          </div>
        </section>

        <div className="App-post-tools">
            <div className="App-color-picker">
              {
                this.colors.map(each => {
                  return (
                    <div
                      key={each}
                      className={`App-color-picker-btn ${this.state.textColor === each ? 'active' : ''}`}
                      onClick={(e) => {
                        this.setState({ textColor: each })
                      }}
                      style={{ backgroundColor: each }}
                    ></div>
                  )
                })
              }
            </div>

            <div className="App-size-picker App-style-picker">
              <SliderPicker
                marks={{ 0: 'XS', 25: 'S', 50: 'M', 75: 'L', 100: 'XL' }}
                onChange={(e) => {
                  this.setState({ textSize: textSizeMap[e] })
                }}
              />
            </div>

            <div className="App-weight-picker App-style-picker">
              <SliderPicker
                marks={{ 0: 'Light', 50: 'Medium', 100: 'Bold' }}
                onChange={(e) => {
                  this.setState({ textWeight: textWeightMap[e] })
                }}
              />
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
