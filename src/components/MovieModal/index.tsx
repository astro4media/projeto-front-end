import ContainerMovieModal from "./styles";

interface genre {
  id: number;
  name: string;
}

export interface IMovie {
  title: string;
  overview: string;
  runtime: string;
  genres: genre[];
  poster_path: string;
  backdrop_path: string;
}

const MovieModal = ({
  title,
  overview,
  runtime,
  genres,
  poster_path,
  backdrop_path,
}: IMovie) => {
  console.log(
    genres?.reduce((acc, { name }) => name + ", " + acc, "").replace(/, $/, "")
  );

  return (
    <ContainerMovieModal background={backdrop_path}>
      <div className="div-main">
        <img src={backdrop_path} alt="" />
        <div className="div-page">
          <figure>
            <img src={poster_path} alt="imagem" />
          </figure>
          <div className="div-content">
            <h2>{title}</h2>
            <h4>{overview}</h4>
            <span>{runtime}</span>
            {genres?.length > 0 ? (
              <p>
                {genres
                  ?.reduce((acc, { name }) => name + ", " + acc, "")
                  .replace(/, $/, "")}
              </p>
            ) : (
              <p>Gênero indisponível</p>
            )}
          </div>
        </div>
      </div>
    </ContainerMovieModal>
  );
};

export default MovieModal;
