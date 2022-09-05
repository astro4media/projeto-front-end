import tmdb, { IMedia } from ".";
import { clearMedia, TMediaType } from "./utils";

interface IGetDiscover {
  page: number;
  results: IMedia[];
  total_pages: number;
}

type IDiscoverMedia = (mediaType: TMediaType, genreId: number) => Promise<any>;

const discoverMedia: IDiscoverMedia = async (mediaType, genreId) => {
  const { data } = await tmdb.get<IGetDiscover>(`discover/${mediaType}`, {
    params: { with_genres: genreId },
  });

  const responseMedia = data.results.map((media) =>
    clearMedia(media, "genre_ids")
  );

  console.log(responseMedia);
  return responseMedia;
};

export default discoverMedia;
