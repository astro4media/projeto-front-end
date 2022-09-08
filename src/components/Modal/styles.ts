import styled from "styled-components";

const ModalStyle = styled.div`
  div.boxModal {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    max-width: 400px;
    backdrop-filter: blur(3px);
    background-color: white;
    background: linear-gradient(
      118.08deg,
      rgba(22, 0, 33, 0.88) 1.35%,
      rgba(45, 5, 64, 0.352) 100%
    );
    box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(45px);
    border-radius: 18px;
  }

  div.topModalTitle {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;

    h2.titleModal {
      color: white;
      margin-left: 15px;
    }
    button.buttonModal {
      margin-right: 15px;
    }
  }
  div.topModal {
    text-align: end;
    button {
      margin-top: 15px;
      margin-right: 15px;
    }
  }

  h2.titleModal {
  }

  button.buttonModal {
    border-style: none;
    background-color: transparent;
    color: white;
  }

  div.contentModal {
    margin-left: 15px;
    margin-right: 15px;
    margin-top: 15px;
    margin-bottom: 15px;

    .contentModalChildren {
      margin-top: 2rem;
      width: 100%;
      height: 100%;

      display: flex;
      gap: 1.4rem;

      color: #fff;
      
      .imgModal {
        width: 100px;
        border-radius: 6px;
      }

      .infoMovie {
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 10px;

        .descricaoModal {
          width: 28ch;
          overflow: hidden;
          text-overflow: ellipsis;

          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
        }
      }
      
    }
    .buttonsModal {
      width: 100%;
      margin-top: 1.5rem;

      display: flex;
      justify-content: space-around;

      button {
        padding: 6px;
        border-radius: 5px;
        border: none;

        background-color: #2b0748;
        color: #fff;

        transform: translate(0);
        overflow: hidden;

        display: flex;
        align-items: center;
        gap: 5px;

        .assistir {
          color: #fff;
        }

        ::before {
                    content: '';
                    position: absolute;
                    background-color: #811e9b;
                    width: 10px;
                    top: 0;
                    bottom: 0;
                    left: -32px;
                    transform: rotate(-16deg);
                    filter: blur(5px);
                }
                :hover::before {
                    left: calc(100% + 32px);
                    transition: 0.75s;
                }
                :hover {
                    background-color: #2b0748;
                }
      }
    }
  }
`;

export default ModalStyle;
