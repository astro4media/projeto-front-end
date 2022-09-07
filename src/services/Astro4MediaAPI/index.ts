import { autoLogin } from "./autoLogin";
import { userLogin } from "./userLogin";
import { userRegister } from "./userRegister";
import getUserMedias from "./getUserMedias";
import axios from "axios";

const api = axios.create({
  baseURL: "https://astro4media.herokuapp.com",
  timeout: 15000,
});

export default api;
export { autoLogin, userLogin, userRegister, getUserMedias };
