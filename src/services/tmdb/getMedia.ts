import tmdb, { IActor, IMedia } from ".";
import { clearMedia, TMediaType } from "./utils";

export interface IGetMediaResponse
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
    params: { append_to_response: "credits" },
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
