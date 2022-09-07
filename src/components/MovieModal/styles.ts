import styled from "styled-components";

interface IMovieModal {
  background: string;
}

const ContainerMovieModal = styled.div<IMovieModal>`
  color: #ffffff;
  position: relative;

  .div-main {
    position: sticky;
    img {
      position: relative;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .div-page {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      padding: 0 10%;

      figure {
        img {
          width: 23.5rem;
          height: 35rem;
          object-fit: contain;
        }
        margin-top: 2rem;
        margin-bottom: 2rem;
      }

      .div-content {
        margin-left: 10%;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        margin-top: 2rem;

        h4 {
          overflow-x: scroll;
          height: 21.5rem;
        }
      }
    }

    @media screen and (max-width: 768px) {
      .div-page {
        flex-direction: column;
        align-items: center;

        figure {
          img {
            width: 16.5rem;
            height: 21rem;
            object-fit: contain;
          }
        }
      }
    }
  }
`;

export default ContainerMovieModal;
