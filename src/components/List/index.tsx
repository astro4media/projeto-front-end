import Card from "../Card";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { IMedia } from "../../services/tmdb";

interface IListProps {
  sessionTitle: string;
  medias: IMedia[];
  desc?: boolean;
}

const List = ({ sessionTitle, medias, desc }: IListProps) => {


  return (
    <>
      <h2>{sessionTitle}</h2>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        { medias.map((media) => {
          return (
            <SwiperSlide>
              <Card key={media.id} media={media} desc={desc} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default List;
