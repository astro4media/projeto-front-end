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
    border-top: 5px solid rgba(22, 0, 33, 0.88);

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
        width: 100%;
        max-width: 350px;
        margin-left: 15px;
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
        margin-left: 15px;
        margin-right: 15px;
      }

      .textContent {
        text-align: justify;
        color: white;
        font-weight: 500;
        font-size: 18px;
        margin-left: 15px;
        margin-right: 15px;
      }
    }
  }

  .finalContent {
    width: 100%;
    /* max-height: 500px; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    background-color: #1e1e1e;
    border-bottom: 5px solid rgba(22, 0, 33, 0.88);

    .titleContent {
      text-align: center;
      margin-top: 30px;
      color: white;
    }

    .teamContent {
      background-color: #1e1e1e;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      flex-wrap: wrap;
      list-style: none;
      /*       margin-left: 30px;
      margin-right: 30px; */
      gap: 15px;
      position: sticky;
      margin-bottom: 50px;
    }

    .cardContent {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 5px;
      background-color: white;
      border-radius: 6px;
      padding-bottom: 10px;
    }
    .cardProfile {
      width: 250px;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;

      .imageProfile {
        width: 100%;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
      }

      .image {
        width: 100%;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        border-bottom: 3px solid rgba(22, 0, 33, 0.88);
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
  }
`;

export default Container;
