import axios from "axios";
import TokenManager from "./tokenmanager";

export const API = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  withCredentials: true,
});

API.interceptors.request.use(async (config) => {
  const tokenManager = new TokenManager();

  config.headers["Authorization"] = tokenManager.accessToken
    ? `Bearer ${tokenManager.accessToken}`
    : undefined;

  return config;
});
