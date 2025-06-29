

import axios from "axios";

// Creating new axios instance
export const axiosInstance = axios.create({
  withCredentials: true, // Include credentials in requests
  baseURL: "http://147.93.97.119:5000", // Backend URL
  
});

// Add response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    // Successful response — just return it
    return response;
  },
  (error) => {
    const message = error.response?.data?.message || "";

    // Customize this based on how your backend sends token-related errors
    if (
      message.toLowerCase().includes("token not found") ||
      message.toLowerCase().includes("token expired") ||
      message.toLowerCase().includes("Unauthorized") 

    ) {
      localStorage.removeItem("isLoggedIn");
      // Optionally redirect to login or notify user
      // window.location.href = "/login";
    }

    // Forward the error for individual handling
    return Promise.reject(error);
  }
);
