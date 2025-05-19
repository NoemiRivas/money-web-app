import axios from "axios";
import.meta.env.VITE_API_URL

const instance = axios.create({
    baseURL: VITE_API_URL,
    withCredentials: true
})

export default instance; 