import axios from 'axios'

const baseURL =  process.env.NODE_ENV === 'development' ?
  'http://localhost:8000/api/' : 'https://circonomy.africinnovate.xyz/api/'

export default axios.create({
  baseURL,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
  }
})