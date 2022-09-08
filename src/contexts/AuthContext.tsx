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
  idMovie: string;
  setIdMovie: Dispatch<SetStateAction<string>>;
  error: ReactEventHandler<HTMLImageElement>;
  assistidos: IGetMediaResponse[];
  setAssistidos: Dispatch<SetStateAction<IGetMediaResponse[]>>;
  assistir: IGetMediaResponse[];
  setAssistir: Dispatch<SetStateAction<IGetMediaResponse[]>>;
  favoritos: IGetMediaResponse[];
  setFavoritos: Dispatch<SetStateAction<IGetMediaResponse[]>>;
  movie: IGetMediaResponse;
  setMovie: Dispatch<SetStateAction<IGetMediaResponse>>;
}

export const AuthContext = createContext({} as iAuthContext);

export const AuthProvider = ({ children }: IAuthProviderProps) => {
  const [user, setUser] = useState<IUserData>({} as IUserData);
  const [loading, setLoading] = useState(true);
  const [idMovie, setIdMovie] = useState('')
  const [movie, setMovie] = useState<IGetMediaResponse>({} as IGetMediaResponse)
  
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
        idMovie,
        setIdMovie,
        error,
        assistidos,
        setAssistidos,
        assistir,
        setAssistir,
        favoritos,
        setFavoritos,
        movie,
        setMovie
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): iAuthContext => {
  return useContext(AuthContext);
};
