import axios from 'axios'

const { REACT_APP_DEV_API_URL } = process.env

const api = axios.create({
  baseURL: REACT_APP_DEV_API_URL
})

export default api
