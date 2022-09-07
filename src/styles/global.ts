import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root {
        //variáveis css
    }

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        background-color: var(--grey-4);
    }

    body, input, button, textarea {
        font-family: 'Inter', sans-serif;
    }

    button {
        cursor: pointer;
    }

    * {
    
    }

    /* Works on Chrome, Edge, and Safari */
    *::-webkit-scrollbar {
    width: 12px;
    }

    *::-webkit-scrollbar-track {
    background: #171617;
    }

    *::-webkit-scrollbar-thumb {
    background-color: #320c63;
    border-radius: 20px;
    }
`;
