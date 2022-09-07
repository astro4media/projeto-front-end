import { motion } from "framer-motion";
import MovieModal, { IMovie } from "../../components/MovieModal";
import ContainerMovieScreen from "./styles";
import Header from "../../components/Header";
import { getMedia } from "../../services/tmdb";
import { useEffect, useState } from "react";




const Movie = () => {

  const [movie, setMovie] = useState({} as IMovie)

  useEffect(() => {
    async function test() {
      const dataTestmidia = await getMedia("movie", 278);

      setMovie(dataTestmidia)
      
    }
    test();
  }, []);


  console.log(movie.overview)
 

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <ContainerMovieScreen>
        <Header />
        <MovieModal
          title={movie.title}
          overview={movie.overview}
          runtime={movie.runtime}
          genres={movie.genres}
          poster_path={movie.poster_path}
          backdrop_path={movie.backdrop_path}        
        />  
      </ContainerMovieScreen>
    </motion.div>
  );
};

export default Movie;
