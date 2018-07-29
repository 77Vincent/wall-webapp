import querystring from 'query-string'

const Request = {
  getPost: async (queryObject) => {
    const query = querystring.stringify(queryObject) 
    const res = await fetch(`/api/posts?${query}`)
    if (res.status === 200) {
      const data = await res.json()
      return data
    } else {
      return []
    }
  },

  createPost: async (payload = {}) => {
    const res = await fetch('/api/posts', {
      method: 'PUT',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
    if (res.status === 201) {
      const data = await res.json()
      return data
    } else {
      return false
    }
  },

  updatePost: async (id, payload = {}) => {
    const res = await fetch(`/api/posts/${id}`, {
      method: 'post',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
    if (res.status === 200) {
      const data = await res.json()
      return data
    } else {
      return false
    }
  },
}

export default Request
