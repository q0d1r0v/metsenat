// imports
import axios from "axios";

// base url
const baseURL = import.meta.env.VITE_APP_BASE_URL;

// http
export const http = axios.create({
  baseURL,
  headers: {
    Accept: "application/json",
  },
});

http.interceptors.request.use((request: any) => {
  // access token
  const access_token = localStorage.getItem("access_token");

  // clear headers from request
  if (!request.headers) {
    request.headers = {};
  }

  // set token
  if (access_token) {
    request.headers.Authorization = `Bearer ${access_token}`;
  }

  return request;
});

// check to origin
http.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      localStorage.clear();
      location.reload();
    }
    return Promise.reject(error);
  }
);
