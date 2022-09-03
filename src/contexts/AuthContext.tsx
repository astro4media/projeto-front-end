import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { autoLogin } from "../services/Astro4MediaAPI/autoLogin";

interface IAuthProviderProps {
  children: ReactNode;
}

interface IUserData {
  email: string;
  name: string;
  avatar: string;
  id: number;
  bio: string;
}

export interface IUser {
  accessToken: string;
  user: IUserData;
}

export interface IUserLogin {
  email: string;
  password: string;
}

interface iAuthContext {
  user: IUser;
  setUser: Dispatch<SetStateAction<IUser>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

export const AuthContext = createContext({} as iAuthContext);

export const AuthProvider = ({ children }: IAuthProviderProps) => {
  const [user, setUser] = useState<IUser>({} as IUser);
  const [loading, setLoading] = useState(true);

  async function loadUser() {
    const token = localStorage.getItem("@astro4media:token");

    if (token) {
      try {
        const data = await autoLogin();
        setUser(data);
      } catch (error) {
        console.error(error);
      }
    }
    setLoading(false);
  }

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        loading,
        setLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
