import { IUser, IUserRegister } from "../contexts/AuthContext";
import api from "./Astro4MediaAPI";

export async function userRegister(userData: IUserRegister): Promise<IUser> {
  const { data } = await api.post<IUser>("/register", userData);
  console.log(data);
  return data;
}
