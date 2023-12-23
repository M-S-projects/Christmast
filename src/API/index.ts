import axios from "axios";

export const API = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  withCredentials: true,
});

API.interceptors.request.use(async (config) => {
  config.headers["Authorization"] = localStorage.getItem("chr-accessToken")
    ? `Bearer ${localStorage.getItem("chr-accessToken")}`
    : undefined;

  return config;
});
