import { ReactEventHandler } from "react";
import { IMedia } from "../../services/tmdb";
import defaultCardImg from "../../assets/images/defaultCardImg.svg";
import { ListContainer } from "./styles";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

interface ICardProps {
  media: IMedia;
  desc?: boolean;
}

const Card = ({ media, desc }: ICardProps) => {
  const { title, poster_path, release_date, vote_average, id } = media;

  const navigate = useNavigate()
  const {setIdMovie} = useAuth()

  const error: ReactEventHandler<HTMLImageElement> = ({ currentTarget }) => {
    currentTarget.onerror = null;
    currentTarget.src = defaultCardImg;
  };

  return (
    <ListContainer
    as={motion.div}
    initial={{opacity: 0, x: 100}}
    animate={{opacity: 1, x: 0}}
    transition={{duration: 1}}
    whileHover={{
      scale: 1.1,
      cursor: 'pointer',
      transition: { duration: 0.3 },
    }}
    whileTap={{ scale: 0.9 }}
    onClick={() => {
      setIdMovie(id)
      navigate('/movie')
    }}
    >
      <img src={poster_path} alt={title} onError={error} />

      {desc && (
        <div>
          <h3>{title}</h3>
          <p>Lançamento: {release_date}</p>
          <p>Pontuação média: {vote_average}</p>
        </div>
      )}
    </ListContainer>
  );
};

export default Card;
