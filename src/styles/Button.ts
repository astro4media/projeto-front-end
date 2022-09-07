import styled from "styled-components";

const Button = styled.button`
  padding: 5px 10px;
  width: 100%;
  height: 100%;
  margin-top: 10px;
  font-size: 1.2rem;
  background-color: #2b0748;
  color: #fff;
  border: 2px solid transparent;
  border-radius: 0.455rem;
  transform: translate(0);
  overflow: hidden;
  ::before {
    content: "";
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
    border: 2px solid #2b0748;
  }
`;

export default Button;
