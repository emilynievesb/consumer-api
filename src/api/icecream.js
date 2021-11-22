import axios from "axios";
import { API_URL } from "../constants";

export const getIcecreamAxios = () => {
  const endpoint = "/icecream";
  return axios.get(`${API_URL}${endpoint}`).then((result) => {
    return result.data;
  });
};
