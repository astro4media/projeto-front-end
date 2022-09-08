import Card from "../Card";

import { SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { IMedia } from "../../services/tmdb";
import { StyledSwiper, ContainerSwiper } from "../Card/styles";
import { FreeMode } from "swiper";

interface IListProps {
  sessionTitle: string;
  medias: IMedia[];
  desc?: boolean;
}

const List = ({ sessionTitle, medias, desc }: IListProps) => {
  return (
    <ContainerSwiper>
      <h2 className="tittle-session">{sessionTitle}</h2>
      <StyledSwiper
        spaceBetween={25}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        slidesPerView={"auto"}
        breakpoints={{
          500: {
            slidesPerView: 2,
          },
          750: {
            slidesPerView: 3,
          },
          1000: {
            slidesPerView: 4,
          },
          1250: {
            slidesPerView: 5,
          },
          1500: {
            slidesPerView: 6,
          },
        }}
      >
        {medias.map((media) => {
          return (
            <SwiperSlide key={media.id}>
              <Card media={media} mediaType='movie' desc />
            </SwiperSlide>
          );
        })}
      </StyledSwiper>
    </ContainerSwiper>
  );
};

export default List;
