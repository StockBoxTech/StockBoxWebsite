import axios from "axios";

   

// Creating new axios instance
export const axiosInstance = axios.create({
  withCredentials: true, // Include credentials in requests
  baseURL: "https://stockboxbackend.onrender.com", // Backend URL
});