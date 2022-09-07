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

export interface IUserData {
  email: string;
  name: string;
  avatar: string;
  id: number;
  bio: string;
}

export interface IUserRegister {
  name: String;
  email: String;
  password: String;
  bio: String;
  avatar: String | null;
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
  user: IUserData;
  setUser: Dispatch<SetStateAction<IUserData>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

export const AuthContext = createContext({} as iAuthContext);

export const AuthProvider = ({ children }: IAuthProviderProps) => {
  const [user, setUser] = useState<IUserData>({} as IUserData);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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

export const useAuth = (): iAuthContext => {
  return useContext(AuthContext);
};
