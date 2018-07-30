import React from 'react'
import PropTypes from 'prop-types'

import { Post } from '../'

import './index.css'

const Posts = (props) => {
  props = Object.assign({
    isShown: true,
    posts: [],
  }, props)

  return (
    <div 
      className={`App-posts ${props.className}`}
      style={{
        display: props.isShown ? 'block' : 'none'
      }}
    >
      {
        props.posts.map(each => {
          return (
            <Post
              stateSetter={props.stateSetter}
              post={each}
              key={each._id}
            />
          )
        })
      }
    </div>
  )
}

Posts.propTypes = {
  posts: PropTypes.array,
  className: PropTypes.string,
  stateSetter: PropTypes.object,
  isShown: PropTypes.bool,
}

export default Posts
