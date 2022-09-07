import styled from "styled-components";

const Container = styled.main`
  width: 100%;
  height: 100vh;
  position: relative;
  background-color: #1e1e1e;

  .topContent {
    width: 100%;
    height: 100%;
    max-height: 500px;
    position: sticky;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    overflow: hidden;
    border-bottom: 5px solid rgba(22, 0, 33, 0.88);

    .videoContent {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .logoBox {
      width: 100%;
      height: 100%;
      position: absolute;
      object-fit: cover;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      backdrop-filter: blur(2px);
      background: linear-gradient(
        118.08deg,
        rgba(22, 0, 33, 0.88) 1.35%,
        rgba(45, 5, 64, 0.352) 100%
      );
      .logoImage {
        width: 350px;
      }
    }
  }

  .middleContent {
    background-color: #1e1e1e;
    width: 100%;
    height: 100%;
    max-height: 500px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    position: sticky;
    border-bottom: 5px solid rgba(22, 0, 33, 0.88);

    .objective {
      width: 100%;
      max-width: 500px;
      display: flex;
      gap: 15px;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .titleContent {
        color: white;
      }

      .textContent {
        text-align: justify;
        color: white;
        font-weight: 500;
        font-size: 18px;
      }
    }
  }

  .finalContent {
    width: 100%;
    height: 100%;
    max-height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: sticky;
    background-color: #1e1e1e;
    border-bottom: 5px solid rgba(22, 0, 33, 0.88);

    .titleContent {
      color: white;
    }

    .teamContent {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      flex-wrap: wrap;
      list-style: none;
      gap: 15px;
    }

    .cardContent {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: white;
      border-radius: 5px;
      padding-bottom: 10px;
    }
    .cardProfile {
      width: 250px;

      .imageProfile {
        width: 100%;
      }

      .image {
        width: 100%;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
      }
    }

    .boxButtons {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 15px;
      flex-direction: row;
      width: 100%;

      .cardButton {
        background: #2b0748;
        border-radius: 5px;
        display: flex;
        flex-direction: row;
        align-items: center;
        flex-wrap: nowrap;
        color: white;
        gap: 5px;
        border-style: none;
        padding: 5px;
      }
    }

    .cardContent2 {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: white;
      border-radius: 5px;
      padding-bottom: 10px;
    }
    .cardProfile2 {
      width: 250px;

      .imageProfile2 {
        width: 100%;
      }

      .image2 {
        width: 100%;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
      }
    }

    .boxButtons2 {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      gap: 5px;
      width: 100%;

      .cardButton2 {
        background: #2b0748;
        border-radius: 5px;
        display: flex;
        flex-direction: row;
        align-items: center;
        flex-wrap: nowrap;
        color: white;
        border-style: none;
        padding: 5px;
      }
    }
  }
  .cardDev {
    display: flex;
    flex-direction: row;
    /* justify-content: space-between; */
    gap: 30px;
    margin-top: 30px;
    margin-left: 30px;
    margin-right: 30px;
    margin-bottom: 30px;
    .cardProfile {
      display: flex;
      flex-direction: column;
      backdrop-filter: blur(2px);
      background: linear-gradient(
        118.08deg,
        rgba(22, 0, 33, 0.88) 1.35%,
        rgba(45, 5, 64, 0.352) 100%
      );
      border-radius: 15px;
      padding: 15px;
    }
    .cardImage {
      width: 150px;

      .image {
        width: 100%;
        border-radius: 100%;
      }
    }
  }
  .cardTechs {
    .techs {
      list-style: none;
    }
  }
`;

export default Container;
