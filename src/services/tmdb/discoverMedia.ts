import tmdb, { IMedia } from ".";
import { clearMedia, TMediaType } from "./utils";

interface IGetDiscover {
  page: number;
  results: IMedia[];
}

type IDiscoverMedia = (
  mediaType: TMediaType,
  genreId: number,
  page?: number
) => Promise<IMedia[]>;

const discoverMedia: IDiscoverMedia = async (mediaType, genreId, page) => {
  const params = { with_genres: genreId, page };

  const { data } = await tmdb.get<IGetDiscover>(`discover/${mediaType}`, {
    params,
  });

  const responseMedia = data.results.map((media) =>
    clearMedia(media, "genre_ids")
  );

  console.log(responseMedia);
  return responseMedia;
};

export default discoverMedia;
