import api from ".";
import { IMedia } from "../tmdb";
import { TMediaType } from "../tmdb/utils";

export interface IUserMedia {
  id: number;
  markups: string;
  tmdbMedia: IMedia;
  mediaType: TMediaType;
}

type TGetUserMedias = (userId: number) => Promise<IUserMedia[]>;

const getUserMedias: TGetUserMedias = async (userId) => {
  const { data } = await api.get<IUserMedia[]>(`users/${userId}/medias`);

  return data;
};

export default getUserMedias;
