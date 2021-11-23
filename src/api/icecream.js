import axios from "axios";
import { API_URL } from "../constants";

export const getIcecreamAxios = () => {
  const endpoint = "/icecream";
  return axios.get(`${API_URL}${endpoint}`).then((result) => {
    return result.data;
  });
};

export const createIcecream = async (params) => {
  const endpoint = "/icecream/create";
  const icecream = await axios.post(`${API_URL}${endpoint}`, params);
  console.log(icecream);
};
