import axios from 'axios'

const httpRequest = axios.create({
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  }
})

export default httpRequest
