import axios from "./axios.js"

export const loginRequest = (user) => axios.post(`user/login`, user);
export const registerRequest = (user) => axios.post(`user/register`, user);
export const logoutRequest = () => axios.get(`user/logout`);
export const verifyRequest = () => axios.get(`user/verify`);