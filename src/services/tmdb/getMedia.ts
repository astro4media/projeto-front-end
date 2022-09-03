import tmdb from ".";

interface IUtil {
  name: string;
}

interface IProductionCompany extends IUtil {
  logo_path: string;
}

interface IActor extends IUtil {
  character: string;
}

interface ICredits {
  cast: IActor[];
}

interface IMedia {
  adult: boolean;
  backdrop_path: string;
  genres: IUtil[];
  id: number;
  overview: string;
  poster_path: string;
  production_companies: IProductionCompany[];
  release_date: string;
  runtime: number;
  title: string;
  vote_average: number;
  vote_count: number;
  credits: ICredits;
}

interface IGetMediaResponse {
  adult: boolean;
  backdrop_path: string;
  genres: IUtil[];
  id: number;
  overview: string;
  poster_path: string;
  production_companies: IProductionCompany[];
  release_date: string;
  runtime: string;
  title: string;
  vote_average: number;
  vote_count: number;
  credits: ICredits;
}

type TGetMedia = (
  category: string,
  mediaId: string
) => Promise<IGetMediaResponse>;

const getMedia: TGetMedia = async (category, mediaId) => {
  function convertToHours(totalMinutes: number) {
    const minutes = totalMinutes % 60;
    const hours = Math.floor(totalMinutes / 60);

    return `${hours}h${minutes.toString().padStart(2, "0")}`;
  }

  const params = {
    api_key: "294f48cf4e33570dfc042f75eff76313",
    language: "pt-BR",
    append_to_response: "credits",
  };

  const { data } = await tmdb.get<IMedia>(`/${category}/${mediaId}`, {
    params,
  });

  const {
    adult,
    backdrop_path,
    genres,
    id,
    overview,
    poster_path,
    production_companies,
    release_date,
    runtime,
    title,
    vote_average,
    vote_count,
    credits,
  } = data;

  const baseImageUrl = "https://image.tmdb.org/t/p";
  const mediaImageUrl = `${baseImageUrl}/original`;
  const companyImageUrl = `${baseImageUrl}/w45`;

  const productionCompanies = production_companies.map((company) => {
    company.logo_path = companyImageUrl + company.logo_path;

    return company;
  });

  const date = new Date(release_date.replace("-", "."));

  const responseMedia = {
    adult,
    backdrop_path: mediaImageUrl + backdrop_path,
    genres,
    id,
    overview,
    poster_path: mediaImageUrl + poster_path,
    production_companies: productionCompanies,
    release_date: date.toLocaleDateString("pt-BR"),
    runtime: convertToHours(runtime),
    title,
    vote_average,
    vote_count,
    credits,
  };

  return responseMedia;
};

export default getMedia;
