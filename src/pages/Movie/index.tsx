import { motion } from "framer-motion";
import MovieModal from "../../components/MovieModal";
import { IMovie } from "../../components/MovieModal";
import ContainerMovieScreen from "./styles";
import Header from "../../components/Header";

const Movie = ({ nome, descricao, duracao, categoria, imagem }: IMovie) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <ContainerMovieScreen>
        <Header/>
        <MovieModal
          nome={nome}
          descricao={descricao}
          duracao={duracao}
          categoria={categoria}
          imagem={imagem}
        />
      </ContainerMovieScreen>
    </motion.div>
  );
};

export default Movie;
