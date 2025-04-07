import axios from "axios";

const apiService = {
  get: async (url, token) =>
    axios.get(url, { headers: { Authorization: `Bearer ${token}` } }),
  
  post: async (url, data, token) =>
    axios.post(url, data, { headers: { Authorization: `Bearer ${token}` } }),

  put: async (url, data, token) =>
    axios.put(url, data, { headers: { Authorization: `Bearer ${token}` } }),

  delete: async (url, token) =>
    axios.delete(url, { headers: { Authorization: `Bearer ${token}` } }),
};

export default apiService;