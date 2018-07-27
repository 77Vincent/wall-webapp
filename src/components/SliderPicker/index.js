import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'


class SliderPicker extends Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    marks: PropTypes.object,
    onChange: PropTypes.func,
    default: PropTypes.number,
  }

  static defaultProps = {
    className: '',
    style: {},
    marks: {},
    onChange: () => {},
    default: 50,
  }

  render() {
    return (
      <div
        style={this.props.style}
        className={this.props.className}
      >
        <Slider
          min={0}
          marks={this.props.marks}
          step={null}
          onChange={this.props.onChange}
          defaultValue={this.props.default}
          dotStyle={{ borderColor: '#777' }}
          handleStyle={{ borderColor: '#2FAE91' }}
          trackStyle={{ backgroundColor: '#777' }}
        />
      </div>
    )
  }
}

export default SliderPicker 
