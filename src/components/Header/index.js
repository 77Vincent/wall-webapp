import React from 'react'
import PropTypes from 'prop-types'

import './index.css'
import logo from '../../images/logo.png'
import { Icon } from '../'

const Header = (props) => {
  return (
    <header>
      <div className="App-logo">
        <img src={logo} />
      </div>

      <section>
        <Icon
          type="add"
          className="App-header-btn"
          title="Write"
          onClick={() => {
            props.stateSetter.isWriting(true)
          }}
        />

        <Icon
          type="info"
          className="App-header-btn"
          title="About"
          onClick={(e) => {
            props.stateSetter.isInfoShown(true)
          }}
        />
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
