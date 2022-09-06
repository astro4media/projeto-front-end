import ContainerMovieModal from "./styles";

export interface IMovie {
  nome: string;
  descricao: string;
  duracao: string;
  categoria: string;
  imagem: string;
}

const MovieModal = ({
  nome,
  descricao,
  duracao,
  categoria,
  imagem,
}: IMovie) => {
  return (
    <ContainerMovieModal>
      <div className="div-modal">
        <figure>
          <img src={imagem} alt="imagem" />
        </figure>
        <div className="div-content">
          <h2>{nome}nome</h2>
          <h4>{descricao}descricao</h4>
          <span>{duracao}duracao</span>
          <p>{categoria}categoria</p>
        </div>
      </div>
    </ContainerMovieModal>
  );
};

export default MovieModal;
