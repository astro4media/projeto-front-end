import { autoLogin } from "./autoLogin";
import { userLogin } from "./userLogin";
import axios from "axios";

const api = axios.create({
  baseURL: "https://astro4media.herokuapp.com",
  timeout: 5000,
});

export default api;
export { autoLogin, userLogin };
