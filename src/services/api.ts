import axios from 'axios'

const api = axios.create({
  baseURL: 'http://3.137.211.94:5000/v1/',
  headers: {
    Accept: '*/*',
    'Content-Type': 'application/json'
  }
})

export default api
