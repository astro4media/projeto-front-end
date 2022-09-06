import styled from "styled-components";

const ContainerMovieModal = styled.div`
  color: #ffffff;

  max-width: 100vw;
  width: 100%;
  margin-top: 8rem;
  

  .div-modal {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    padding: 0 20%;

    figure{
        img{
        }
    }

    .div-content{
        margin-left: 22%;
        display: flex;
        flex-direction: column;
        gap: 2rem;

    }

  }
`;

export default ContainerMovieModal;
