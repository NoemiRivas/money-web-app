import axios from "axios";
import { getAuth } from "@clerk/clerk-react";

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});
console.log("Base URL cargada:", import.meta.env.VITE_API_URL);

instance.interceptors.request.use(
  async (config) => {
    const { getToken } = getAuth();
    const token = await getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
export default instance;