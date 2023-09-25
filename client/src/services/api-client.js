
import axios, { CanceledError } from 'axios';

export default axios.create({
  baseURL: 'https://expense-tracker-fm4t.onrender.com',
})

export { CanceledError };
