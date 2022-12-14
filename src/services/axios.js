import axios from "axios";
import { BASE_URL, TOKEN } from "../constants/constants";
export const request = axios.create({
  baseURL: BASE_URL,
  headers: {
    TokenCybersoft: TOKEN,
  },
});

request.interceptors.request.use((config) => {
  let userInfo = localStorage.getItem("USER_ACESS");

  if (userInfo) {
    userInfo = JSON.parse(userInfo);

    config.headers.Authorization = `Bearer ${userInfo.accessToken}`;
  }

  return config;
});

// RESPONSE:    A        =>      interceptors          =>         B
request.interceptors.response.use((response) => {
  // console.log(response);
  return response;
});
