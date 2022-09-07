import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
  ReactEventHandler,
} from "react";

import { autoLogin } from "../services/Astro4MediaAPI/autoLogin";
import defaultCardImg from "../assets/images/defaultCardImg.svg";
import { IGetMediaResponse } from "../services/tmdb/getMedia";

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
  idMovie: string;
  setIdMovie: Dispatch<SetStateAction<string>>;
  error: ReactEventHandler<HTMLImageElement>;
  assistidos: IGetMediaResponse[];
  setAssistidos: Dispatch<SetStateAction<IGetMediaResponse[]>>;
  assistir: IGetMediaResponse[];
  setAssistir: Dispatch<SetStateAction<IGetMediaResponse[]>>;
  favoritos: IGetMediaResponse[];
  setFavoritos: Dispatch<SetStateAction<IGetMediaResponse[]>>;
}

export const AuthContext = createContext({} as iAuthContext);

export const AuthProvider = ({ children }: IAuthProviderProps) => {
  const [user, setUser] = useState<IUser>({} as IUser);
  const [loading, setLoading] = useState(true);
  const [idMovie, setIdMovie] = useState('')
  
  const [assistidos, setAssistidos] = useState<IGetMediaResponse[]>([])
  const [assistir, setAssistir] = useState<IGetMediaResponse[]>([])
  const [favoritos, setFavoritos] = useState<IGetMediaResponse[]>([])

  console.log(assistidos)
  console.log(assistir)
  console.log(favoritos)
  
  const error: ReactEventHandler<HTMLImageElement> = ({ currentTarget }) => {
    currentTarget.onerror = null;
    currentTarget.src = defaultCardImg;
  };

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
        error,
        assistidos,
        setAssistidos,
        assistir,
        setAssistir,
        favoritos,
        setFavoritos,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
