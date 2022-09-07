import tmdb, { IMedia } from ".";
import { clearMedia, TMediaType } from "./utils";

type TGetMedia = (
  mediaType: TMediaType,
  mediaId: string | number
) => Promise<IMedia>;

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
