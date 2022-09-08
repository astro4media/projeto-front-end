import styled from "styled-components";
import { Swiper } from "swiper/react";

export const ListContainer = styled.div`
  img {
    width: 246px;
    height: 367px;
    object-fit: contain;
    border-radius: 10px;
  }

`;

export const StyledSwiper = styled(Swiper)`
  background: linear-gradient(
    180deg,
    rgba(30, 30, 30, 0.5) 0%,
    rgba(86, 18, 140, 0.463542) 48.96%,
    rgba(35, 5, 58, 0) 73.44%
  );
  .swiper-wrapper {
    padding: 2rem 3rem;
  }

  .swiper-button-next, .swiper-button-prev {
    color: white;
}
`;

export const ContainerSwiper = styled.div`
  .tittle-session {
    margin-left: 3rem;
  }
`
