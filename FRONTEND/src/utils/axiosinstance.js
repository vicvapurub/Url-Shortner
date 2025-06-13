//axios ka instance banao

import axios from "axios";
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 20000, // 10 seconds timeout
  withCredentials: true
});


// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      // Server responded with an error status code
      switch (error.response.status) {
        case 400:
          console.error('Bad Request:', error.response.data);
          break;
        case 401:
          console.error('Unauthorized');
          // Handle unauthorized access - maybe redirect to login
          break;
        case 403:
          console.error('Forbidden');
          break;
        case 404:
          console.error('Not Found');
          break;
        case 500:
          console.error('Internal Server Error');
          break;
        default:
          console.error('Server Error:', error.response.data);
      }
    } else if (error.request) {
      // Request was made but no response received
      console.error('Network Error:', error.message);
    } else {
      // Error in setting up the request
      console.error('Error:', error.message);
    }

    // You can customize the error message to return
    return Promise.reject({
      message: error.response?.data?.message || 'Something went wrong',
      status: error.response?.status || 500,
     // originalError: error
    });
  }
);
export default axiosInstance;
