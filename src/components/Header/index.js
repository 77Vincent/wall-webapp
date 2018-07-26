import React from 'react'
import PropTypes from 'prop-types'

import './index.css'
import { Icon } from '../'

const Header = (props) => {
  return (
    <header>
      <h1>Great Free Wall</h1>

      <section>
        <Icon
          type="add"
          className="App-header-btn"
          onClick={() => {
            props.stateSetter.isPosting(true)
          }}
        />

        <Icon
          type="refresh"
          className="App-header-btn"
          onClick={(e) => {
          }}
        />

        <Icon type="info" className="App-header-btn"/>
      </section>
    </header>
  )
}

Icon.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  stateSetter: PropTypes.object,
}

Icon.defaultProps = {
  className: '',
  style: {},
  stateSetter: {},
}

export default Header
