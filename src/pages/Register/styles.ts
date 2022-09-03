import styled from "styled-components";
// import image from "../../assets/images/backImage.svg"

const ContainerRegister = styled.div`
  display: flex;
  background-color: #000000;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  span {
    color: red;
    width: 11rem;
  }

  .div-main {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
   

    figure {
        text-align: center;
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
     

      color: #FFFFFF;

      .title-register {
        color: #FFFFFF;
      }

      .div-checkbox {
        display: flex;
        flex-direction:row;
        flex-wrap: nowrap;
        align-items: center;
        width: 11rem;
        #check {
        }
      }
      button{
        margin-top: 10px;
        width: 40%;
        height: 1.9rem;
        border-radius: 0.455rem;
        background-color:rgba(43, 7, 72, 1) ;
        color: #FFFFFF;
        border: none;
      }
    }

  }
`;

export default ContainerRegister;
