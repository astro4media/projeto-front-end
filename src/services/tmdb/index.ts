import axios from "axios";

export interface IUtil {
  name: string;
}

export interface IProductionCompany extends IUtil {
  logo_path: string;
}

export interface IActor extends IUtil {
  character: string;
}

interface ICredits {
  cast: IActor[];
}

export interface IMedia {
  adult: boolean;
  backdrop_path: string;
  genres: IUtil[];
  genre_ids: number[];
  id: number;
  overview: string;
  poster_path: string;
  production_companies: IProductionCompany[];
  release_date: string;
  runtime: number;
  title: string;
  vote_average: number;
  vote_count: number;
  credits: ICredits;
}

const tmdb = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  timeout: 5000,
});

export default tmdb;
