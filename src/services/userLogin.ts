import { IUser, IUserLogin } from "../contexts/AuthContext";
import api from "./api";


export async function userLogin(userData: IUserLogin): Promise<IUser> {
  const { data } = await api.post<IUser>("/login", userData);

  return data;

}
