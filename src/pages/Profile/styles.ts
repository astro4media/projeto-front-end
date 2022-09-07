import styled from "styled-components";

const Container = styled.div`
  background-color: #1e1e1e;
  color: #fff;
  min-height: 100vh;

  .avatarContainer {
    width: 70%;
    height: 70%;
  }

  .userSessions {
    max-width: 100%;

    h2 {
      margin-left: 3rem;
    }
  }

  .noSessions {
    max-width: 100%;
    width: max-content;
    text-align: center;

    a {
      max-width: 200px;
      width: 100%;
    }
  }
`;

export default Container;
