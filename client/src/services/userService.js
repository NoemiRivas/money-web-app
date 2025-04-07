/**
 * API CALLS USER ONLY
 */
import axios from "axios";

const API_REGISTER =import.meta.env.VITE_API_URL;
const API_LOGIN = import.meta.env.VITE_API_URL_LOGIN
const API_UPDATE = import.meta.env.VITE_API_URL_UPDATE;


export const registerUser = async (userData) => {
  try {
    const response = await axios.post(
      `${API_REGISTER}`,
      userData,
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    return response
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const loginUser = async (userData) => {
  try {
    const response = await axios.post(
      `${API_LOGIN}`,
      userData,
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    return response
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const apiUpdateUser = async (formData) => {
  const token = localStorage.getItem("token");
  try {
    const response = await axios.put(
      `${API_UPDATE}`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;

  } catch (error) {
    console.log(error);
    
  }
}