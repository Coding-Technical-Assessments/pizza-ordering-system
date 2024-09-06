import axios from "axios";
import { getCookie } from "cookies-next";

export const initializeAxios = () => {
  const token = getCookie("token");
  console.log("Init header call token", token);

  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  axios.defaults.headers.common["Accept"] = "application/json";
};
