import styled from "styled-components";
import image from "../../assets/images/backImage.svg"

const ContainerRegister = styled.div`
  display: flex;
  background-color: #000000;
  background-image: url(${image});
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  span {
    color: red;
    width: 11rem;
  }

 
  .div-register {
    display: flex;

    flex-direction: column;
    width: 100%;
    height: 100%;
    align-items: center;
    .rocket-logo {
      width: 65px;
      
    }

    .name-logo {
      width: 210px;
    }

    form {
      background-color: #282727;
      border-radius: 1rem;
      align-items: center;
      display: flex;
      gap: 1.25rem;
      flex-direction: column;
      width: 18.25rem;
      padding: 2rem;
      margin: 2rem;

      color: #ffffff;

      .title-register {
        color: #ffffff;
      }

      .div-checkbox {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: center;
        width: 11rem;
        #check {
        }
      }
      button {
        margin-top: 10px;
        width: 40%;
        height: 1.9rem;
        border-radius: 0.455rem;
        background-color: rgba(43, 7, 72, 1);
        color: #ffffff;
        border: none;
      }
      p {
        color: #000000;
      }
    }
  }
  
`;

export default ContainerRegister;
