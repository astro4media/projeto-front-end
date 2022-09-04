import { IMedia } from "..";

type TMediaType = "movie" | "tv";

type TMediaPropsRest = Omit<
  IMedia,
  | "adult"
  | "backdrop_path"
  | "id"
  | "overview"
  | "poster_path"
  | "release_date"
  | "title"
  | "vote_average"
  | "vote_count"
>;

type TMediaProps = keyof TMediaPropsRest | "cast";

type TClearMedia = (media: IMedia, ...mediaProps: TMediaProps[]) => any;

const params = {
  api_key: "294f48cf4e33570dfc042f75eff76313",
  language: "pt-BR",
};

function convertToHours(totalMinutes: number) {
  const minutes = totalMinutes % 60;
  const hours = Math.floor(totalMinutes / 60);

  return `${hours}h${minutes.toString().padStart(2, "0")}`;
}

const clearMedia: TClearMedia = (media, ...mediaProps) => {
  const {
    adult,
    backdrop_path,
    id,
    overview,
    poster_path,
    release_date,
    title,
    vote_average,
    vote_count,
  } = media;

  const baseImageUrl = "https://image.tmdb.org/t/p";
  const mediaImageUrl = `${baseImageUrl}/original`;

  const date = new Date(release_date.replace("-", "."));

  const responseMedia: any = {
    adult,
    backdrop_path: mediaImageUrl + backdrop_path,
    id,
    overview,
    poster_path: mediaImageUrl + poster_path,
    release_date: date.toLocaleDateString("pt-BR"),
    title,
    vote_average,
    vote_count,
  };

  mediaProps?.forEach((prop) => {
    if (prop === "cast") {
      responseMedia[prop] = media.credits?.cast;
    } else if (prop === "production_companies") {
      const companyImageUrl = `${baseImageUrl}/w45`;

      const productionCompanies = media.production_companies?.map((company) => {
        company.logo_path = companyImageUrl + company.logo_path;

        return company;
      });

      responseMedia[prop] = productionCompanies;
    } else if (prop === "runtime") {
      responseMedia[prop] = convertToHours(media.runtime);
    } else {
      responseMedia[prop] = media[prop];
    }
  });

  return responseMedia;
};

export { clearMedia, params };
export type { TMediaType };
