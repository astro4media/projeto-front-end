import tmdb, { IMedia } from ".";
import { clearMedia } from "./utils";

interface IPeople {
  known_for: IMedia[];
}

interface IGetSearch {
  page: number;
  results: (IMedia | IPeople)[];
}

type TSearchMedia = (search: string, page?: number) => Promise<any>;

const searchMedia: TSearchMedia = async (search, page = 1) => {
  const params = {
    page,
    query: search,
  };

  const { data } = await tmdb.get<IGetSearch>("search/multi", { params });

  const responseMedias = data.results.flatMap((item) => {
    const knownFor = (item as IPeople).known_for;
    if (knownFor) {
      return knownFor.map((media) => clearMedia(media, "genre_ids"));
    }

    return clearMedia(item as IMedia, "genre_ids");
  });

  return responseMedias;
};

export default searchMedia;
