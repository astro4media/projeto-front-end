import { IUserData } from "../../contexts/AuthContext";
import api from ".";

export async function autoLogin(): Promise<IUserData> {
  const token = localStorage.getItem("@astro4media:token");
  const { data } = await api.get<IUserData>("/profile", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
}
