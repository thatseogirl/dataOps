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
 .admin_line_rule {
    height: 4px;
    width: 80%;
    margin: auto;
    background-color: ${({ theme }) => theme.colors.navigationMenu};
    opacity: 0.54;
    margin-top: 0.75em;
  }
  .line_rule {
    border:0.5px solid ${({ theme }) => theme.colors.navigationMenu};
    opacity: 0.54;
  }
  .contact_feedback {
    color: ${({ theme }) => theme.colors.admin};
    width: 80%;
    margin: auto;
    padding: 0.5em 1.2em;
    letter-spacing: 0.25px;
    &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.secondaryColor};
    border-radius: 2px;
    border: 1px solid ;
    outline: none;
  }
  }
  .header {
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    padding-top: 1em;

    h3 {
      font-size: 32px;
      color: ${({ theme }) => theme.colors.darkDim};
    }
    p {
      font-size: 14px;
      color:  ${({ theme }) => theme.colors.darkDim};
      margin-bottom: 38px;
    }
    section {
      display: flex;
    }
    .circle {
      width: 8px;
      height: 8px;
      border: 2px solid #E0E0E7;
      border-radius: 50%;
      margin: 6px 14px;
    }
  }
  .span {
    color: ${({ theme }) => theme.colors.darkDim};
    font-weight: 300;
    letter-spacing: 0px;
  }
  .basic {
    color: white;
    background-color:#00AFBA;
    border: 0;
  }

  .btn {
    width: 100%;
    padding: 1em 2em;
    border-radius: 5px;
    font-size: 14px;
    margin-bottom: 1em;

  }
  .standard {
    color: #006B96;
    background-color:transparent;
    border: 1px solid #006B96;
  }
  .dedicated {
    color: #A8A9B8;
    background-color:transparent;
    border: 1px solid #A8A9B8;
  }
  .hat_img {
    position: absolute;
    width: 3%;
    right: 0;
    top: 300px;
    bottom: 0;
    cursor: pointer;
  }
  .content:last-child hr {
  display: none;
}
.env_btn {
  outline: none;
  color: #006B96;
    background-color:transparent;
    border: 1px solid #006B96;
    padding: 1em;
    border-radius: 5px;
    font-size: 14px;
    margin-bottom: 1em;
}
.range {
  width: 100%;
  margin-top: 15px;
}
.slider {
  -webkit-appearance: none;
  width: 100%;
  height: 15px;
  border-radius: 5px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: .2s;
  transition: opacity .2s;
}

.slider:hover {
  opacity: 1;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #00AFBA;
  cursor: pointer;
}

.slider::-moz-range-thumb {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #04AA6D;
  cursor: pointer;
}
`;

export default GlobalStyles;
