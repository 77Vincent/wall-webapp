import React, { Component } from 'react'
import PropTypes from 'prop-types'
import randomcolor from 'randomcolor'

import { Icon, SliderPicker, Loading } from '../../components'
import { Request } from '../../services'
import './index.css'

const textSizeMap = { 0: 12, 33: 15, 66: 18, 100: 21 }
const textWeightMap = { 0: 300, 100: 900 }
const textOpacityMap = { 0: 0.5, 50: 0.75, 100: 1 }

class Post extends Component {
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
    isLoading: false,
    textValue: '',
    textColor: '#000000',
    textSize: textSizeMap[33],
    textWeight: textWeightMap[0],
    colors: ['#000000', '#E9967A', '#B22222', '#C71585', '#9370DB', '#4682B4', '#1E90FF', '#20B2AA', '#8FBC8B'],
  }

  render() {
    const style = Object.assign({
      opacity: this.props.isPosting ? '1' : '0',
      zIndex: this.props.isPosting ? '1' : '-1',
    }, this.props.style)

    const { textValue, textColor, textSize, textWeight, textOpacity } = this.state

    return (
      <div
        style={style}
        className={`App-post ${this.props.className}`}
      >
        <Loading
          isLoading={this.state.isLoading}
        />

        <section>
          <textarea
            autoFocus
            maxLength={55}
            placeholder="Say something"
            style={{
              color: textColor,
              fontSize: textSize,
              fontWeight: textWeight,
              opacity: textOpacity,
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
                this.setState({ isLoading: true })

                const res = await Request.createPost({
                  content: textValue,
                  color: textColor,
                  fontSize: textSize,
                  fontWeight: textWeight,
                  opacity: textOpacity,
                })

                const posts = await Request.getPost()
                this.props.stateSetter.posts(posts)

                this.setState({ isLoading: false })
                this.props.stateSetter.isPosting(false)
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
                this.state.colors.map(each => {
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
              <Icon
                className="App-color-refresh"
                style={{
                  width: '24px',
                  height: '24px',
                  display: 'inline-block',
                }}
                type="refresh"
                onClick={() => {
                  const newColors = []
                  for (let i = 0; i < 8; i += 1) {
                    newColors.push(randomcolor())
                  }
                  this.setState({
                    colors: ['#000000']
                      .concat(newColors)
                  })
                }}
              >
              </Icon>
            </div>

            <div className="App-style-picker">
              <h4>Size</h4>
              <SliderPicker
                marks={{ 0: 'S', 33: 'M', 66: 'X', 100: 'XL' }}
                default={33}
                onChange={(e) => {
                  this.setState({ textSize: textSizeMap[e] })
                }}
              />
            </div>

            <div className="App-style-picker">
              <h4>Weight</h4>
              <SliderPicker
                marks={{ 0: 'Light', 100: 'Bold' }}
                onChange={(e) => {
                  this.setState({ textWeight: textWeightMap[e] })
                }}
              />
            </div>

            <div className="App-style-picker">
              <h4>Opacity</h4>
              <SliderPicker
                marks={{ 0: '0.5', 50: '0.75', 100: '1' }}
                default={100}
                onChange={(e) => {
                  this.setState({ textOpacity: textOpacityMap[e] })
                }}
              />
            </div>

            <div className="App-style-picker">
            </div>
        </div>
      </div>
    )
  }
}

export default Post
