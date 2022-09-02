import styled from "styled-components";
import image from "../../assets/images/backImage.svg"

const LoginContainer = styled.div`
    max-width: 100vw;
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: #000000;
    background-image: url(${image});
    
    .container-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3.37rem;
    }

    .logo-image {
        width: 250px;

    }

    .div-logo {
        
        display: flex;
        justify-content: flex-start;
        align-items: center;

        .rocket-logo {
            width: 65px;
        }
        .name-logo {
            width: 210px;
        }
    }

    form {
        max-width: 18.54rem;
        padding: 1rem;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1.25rem;

        background-color: #282829;
        color: #fff;
        border-radius: 1rem;

        h1 {
            font-size: 1.6rem;
        }

        .viewEyes {
                background-color: unset;
                border: none;
            }
        
        .submitForm {
            width: 40%;
            height: 1.9rem;
            margin-top: 10px;

            font-size: 1.2rem;
            background-color: #2b0748;
            color: #fff;

            border: none;
            border-radius: 0.455rem;

            transform: translate(0);
            overflow: hidden;

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
                    border: 2px solid #2b0748;
                    
                }
        }
    }

    .link-register {
        color: #811e9b;
        cursor: pointer;
        font-weight: 500;
        
        :hover {
            text-decoration: underline;
            opacity: 0.85;
        }
    }
`

export default LoginContainer;