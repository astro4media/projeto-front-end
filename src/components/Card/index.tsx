import { ReactEventHandler } from "react";
import { IMedia } from "../../services/tmdb";
import defaultCardImg from "../../assets/images/defaultCardImg.svg";
import { ListContainer } from "./styles";

interface ICardProps {
  media: IMedia;
  desc?: boolean;
}

const Card = ({ media, desc }: ICardProps) => {
  const { title, poster_path, release_date, vote_average } = media;

  const error: ReactEventHandler<HTMLImageElement> = ({ currentTarget }) => {
    currentTarget.onerror = null;
    currentTarget.src = defaultCardImg;
  };

  return (
    <ListContainer>
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
