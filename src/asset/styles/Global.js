import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body, html{
        background-color: ${({ theme }) => theme.colors.secondaryBackground};
        width: 100%;
        height: 100vh;
        margin: 0;
    }

    .learnBtn {
        background-color: transparent;
        text-transform: uppercase;
        padding: 0.25em 1em;
        font-size: 0.75em;
        color: ${({ theme }) => theme.colors.navigationMenu};
        border: 1px solid ${({ theme }) => theme.colors.navigationMenu};
        border-radius: 4px;
        opacity:0.8;
        margin-right: 20px;
        &:hover{
            opacity:0.64;
            cursor: pointer;
        }
    }
    li {
        list-style: none;
    }
    .nav_link {
        padding: 0.75em ;
        &:hover {
        background-color: #141430;
    }
  }
    input {
    border: none;
    outline: none;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.inputText};
    ::placeholder {
      color: ${({ theme }) => theme.colors.inputText};
    }
  }
  .menuImage {  
    color: ${({ theme }) => theme.colors.navigationMenu};
    margin-top: 5px;
    &:hover {
        opacity: 0.64;
    }
  }
  .menuImage.active {
    color: white;
  }
`;

export default GlobalStyles;
