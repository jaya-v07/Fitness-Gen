import axios from 'axios';

// Create an instance with your backend's base URL
const API = axios.create({
  baseURL: process.env.BASE_URL, // Change to your actual backend URL/port
  headers: {
    'Content-Type': 'application/json',
  },
});
export default API;