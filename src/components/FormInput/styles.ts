import styled from "styled-components";

const InputStyle = styled.div`
    width: 80%;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;

    .fieldContainer__label {
        font-size: 0.79rem;
    }

    .fieldContainer__input {
        width: 100%;
        padding: 0.466rem;
        
        background-color: #d9d9d9;

        border-radius: 0.35rem;

        .inputContainer__input {
            width: 90%;

            background-color: unset;
            border: none;
            
            outline: none;
        }

    }
    .fieldContainer__error {
            color: red;
        }
`

export default InputStyle;