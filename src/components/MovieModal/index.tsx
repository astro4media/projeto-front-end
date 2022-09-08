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

  return (
    <ContainerMovieModal background={backdrop_path}>
      <img src={backdrop_path} alt="" className="backgroudImageMovie" />
        <div className="div-main">
          <div className="div-page">
            <figure>
              <img src={poster_path} alt="imagem" className="imageApresentacao" />
            </figure>
            <div className="div-content">
              <h2>{title}</h2>
              <h4>{overview}</h4>
              <span>Duração: {runtime}</span>
              {genres?.length > 0 ? (
                <p>
                  
                  Gênero: {genres
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
