import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *,*::after,*::before{
        box-sizing: border-box;
    }
    body{
        margin: 0;
        padding: 0;
        font-size: 16px;
        font-family: 'Inter';
        background-color: #131313;
        color: #fff;
        font-weight: 500;
    }
    h1, h2, h3, p{
        margin: 0;
    }
`;
