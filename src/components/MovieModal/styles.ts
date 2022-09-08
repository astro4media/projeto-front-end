import styled from "styled-components";

interface IMovieModal {
  background: string;
}

const ContainerMovieModal = styled.div<IMovieModal>`
  color: #ffffff;
  position: relative;
  
  .backgroudImageMovie {
    width: 100%;
    height: 100%;
    filter: blur(4px);
  }
  .div-main {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

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
          border-radius: 2rem;
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
          overflow-y: auto;
          max-height: 21.5rem;
          padding-right: 1rem;
          
          ::-webkit-scrollbar {
          width: 5px;               /* width of the entire scrollbar */
          }

          ::-webkit-scrollbar-track {
            background: gray;        /* color of the tracking area */
            border-radius: 20px;
          }

          ::-webkit-scrollbar-thumb {
            background-color: #350c6b;    /* color of the scroll thumb */
            border-radius: 20px;       /* roundness of the scroll thumb */
          }
        }
      }
    }

    @media screen and (max-width: 760px) {
      color: #ffffff;
      position: relative;
      

      .backgroudImageMovie {
        width: 100%;
        height: 100%;
        filter: blur(4px);
      }
      .div-main {
        
        
        .div-page {
          align-items: center;
          flex-direction: column;

          figure {
            img {
              width: 9.5rem;
              height: 8rem;
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
              overflow-y: auto;
              max-height: 21.5rem;
              padding-right: 1rem;
              
            }
          }
        }
      }
    }

    
  }
`;

export default ContainerMovieModal;
