import tmdb, { IUtil } from ".";
import { TMediaType } from "./utils";

interface IGetGenreResponse {
  genres: IUtil[];
}

type TListMediaGenres = (mediaType: TMediaType) => Promise<any>;

const listMediaGenres: TListMediaGenres = async (mediaType) => {
  const { data } = await tmdb.get(`genre/${mediaType}/list`);
  const { genres } = data;

  return genres;
};

export default listMediaGenres;
