import styled from "styled-components";

const HeaderContainer = styled.div`
    .container-box {
        background-color: #171617;
        color: rgba(176, 75, 255, 1);
    }
    
    .button-bar {
        background-color: inherit;
        
        .button-tree-bar {
            color: rgba(176, 75, 255, 1);
        }
    }

    .title-team-logo {
        font-weight: 600;
    }

    .lupa-search {
        width: 30px;
        height: 27px;
    }
    
    .perfil {
        width: 2rem;
        height: 2rem;
    }

    .input-search {
        padding: 5px;
        border-radius: 5px;
        border: none;
        outline: none;
        background-color: #d9d9d9;
    }

    .logoImage {
        width: 150px;
        height: 50px;
    }
`
export default HeaderContainer;