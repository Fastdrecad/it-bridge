import axios from "axios";

// Create an Axios instance
const api = axios.create({
  baseURL: "/api", // Set the base URL for all API requests
  timeout: 10000 // Set the timeout limit for the requests
});

// Add a request interceptor
api.interceptors.request.use(
  (config) => {
    // Perform actions before the request is sent
    // For example, attaching authorization tokens:
    // config.headers.Authorization = `Bearer ${yourAuthToken}`;
    return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
api.interceptors.response.use(
  (response) => {
    // Any status code within the range of 2xx causes this function to trigger
    return response;
  },
  (error) => {
    // Any status codes outside the range of 2xx cause this function to trigger
    return Promise.reject(error);
  }
);

export default api;
