import { IUser } from "../contexts/AuthContext";
import api from "./api";


export async function autoLogin(): Promise<IUser> {
    const token = localStorage.getItem("@astro4media:token");
    const { data } = await api.get<IUser>("/profile", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  }