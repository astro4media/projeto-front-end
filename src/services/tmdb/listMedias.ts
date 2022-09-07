import tmdb, { IMedia } from ".";
import { clearMedia, TMediaType } from "./utils";

type TMediaSession = "top_rated" | "popular" | "latest";

interface ITMDBResponse {
  page: number;
  results: IMedia[];
}

type TListMedias = (
  mediaType: TMediaType,
  mediaSession: TMediaSession,
  page?: number
) => Promise<IMedia[]>;

const listMedias: TListMedias = async (mediaType, mediaSession, page = 1) => {
  const params = { page };

  const { data } = await tmdb.get<ITMDBResponse>(
    `${mediaType}/${mediaSession}`,
    { params }
  );

  const medias: IMedia[] = data.results.map((media) => clearMedia(media));
  
  return medias;
};

export default listMedias;
