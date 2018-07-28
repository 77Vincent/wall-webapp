import React from 'react'
import PropTypes from 'prop-types'

import './index.css'
import { Icon } from '../'
import { Request } from '../../services'

const Header = (props) => {
  return (
    <header>
      <h1>Wall</h1>

      <section>
        <Icon
          type="add"
          className="App-header-btn"
          title="Write"
          onClick={() => {
            props.stateSetter.isPosting(true)
          }}
        />

        <Icon
          type="refresh"
          className="App-header-btn"
          title="Shuffle"
          onClick={async (e) => {
            const posts = await Request.getPost({ isShuffle: 1 })
            props.stateSetter.posts(posts)
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
