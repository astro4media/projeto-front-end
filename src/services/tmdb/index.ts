import axios from "axios";
import getMedia from "./getMedia";
import listMedias from "./listMedias";
import discoverMedia from "./discoverMedia";
import listMediaGenres from "./listMediaGenres";

export interface IUtil {
  name: string;
  id: number;
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
  params: {
    api_key: "294f48cf4e33570dfc042f75eff76313",
    language: "pt-BR",
  },
});

export default tmdb;
export { getMedia, listMedias, discoverMedia, listMediaGenres };
