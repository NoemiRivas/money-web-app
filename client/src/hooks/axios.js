import axios from "axios";


const instance = axios.create({
    baseURL: "https://moneyup-n8kx.onrender.com/api",
    withCredentials: true
})

export default instance; 