import axios from "axios";

const instance = axios.create({
  baseURL: "https://moneyup-n8kx.onrender.com/api",
  withCredentials: true,
});
console.log("Base URL cargada:", import.meta.env.VITE_API_URL);
export default instance;
