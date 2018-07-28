import querystring from 'query-string'

const Request = {
  getPost: async (queryObject) => {
    const query = querystring.stringify(queryObject) 
    const res = await fetch(`/api/posts?${query}`)
    const data = await res.json()
    return data 
  },

  createPost: async (payload = {}) => {
    const res = await fetch('/api/posts', {
      method: 'PUT',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
    const data = await res.json()
    return data
  },

  updatePost: async (id, payload = {}) => {
    const res = await fetch(`/api/posts/${id}`, {
      method: 'post',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
    const data = await res.json()
    return data
  },
}

export default Request
