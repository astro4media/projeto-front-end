import tmdb, { IActor, IMedia } from ".";
import { clearMedia, params, TMediaType } from "./utils";

interface IGetMediaResponse
  extends Omit<IMedia, "release_date" | "runtime" | "credits" | "genre_ids"> {
  release_date: string;
  runtime: string;
  cast: IActor[];
}

type TGetMedia = (
  mediaType: TMediaType,
  mediaId: string | number
) => Promise<IGetMediaResponse>;

const getMedia: TGetMedia = async (mediaType, mediaId) => {
  const { data } = await tmdb.get<IMedia>(`/${mediaType}/${mediaId}`, {
    params: { ...params, append_to_response: "credits" },
  });

  const responseMedia = clearMedia(
    data,
    "genres",
    "cast",
    "production_companies",
    "runtime"
  );

  return responseMedia;
};

export default getMedia;
