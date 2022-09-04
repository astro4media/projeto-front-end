import tmdb, { IMedia } from ".";
import { clearMedia, params, TMediaType } from "./utils";

type TMediaSesion = "top_rated" | "popular" | "latest";

interface ITMDBResponse {
  page: number;
  results: IMedia[];
}

type TListMedias = (
  mediaType: TMediaType,
  mediaSession: TMediaSesion
) => Promise<any>;

const listMedias: TListMedias = async (mediaType, mediaSession) => {
  const { data } = await tmdb.get<ITMDBResponse>(
    `${mediaType}/${mediaSession}`,
    {
      params,
    }
  );

  const medias = data.results.map((media) => clearMedia(media));

  return medias;
};

export default listMedias;
