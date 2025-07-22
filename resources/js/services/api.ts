import axios from "axios";

const api = axios.create({
  baseURL: process.env.VITE_API_BASE_URL,
  headers: {
    "X-Requested-With": "XMLHttpRequest",
    "Content-Type": "application/json",
  },
});

export default api;
