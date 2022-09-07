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
  user: IUser;
  setUser: Dispatch<SetStateAction<IUser>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  idMovie: number | null;
  setIdMovie: Dispatch<SetStateAction<number>>;
}

export const AuthContext = createContext({} as iAuthContext);

export const AuthProvider = ({ children }: IAuthProviderProps) => {
  const [user, setUser] = useState<IUser>({} as IUser);
  const [loading, setLoading] = useState(true);
  const [idMovie, setIdMovie] = useState(0)
  console.log(idMovie)

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
        idMovie,
        setIdMovie, 
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
