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
  }
`;

export default ModalStyle;
