
import axios, { CanceledError } from 'axios';

export default axios.create({
  baseURL: 'http://localhost:4001',
})

export { CanceledError };