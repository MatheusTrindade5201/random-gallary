import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        min-height: 100vh;
        background-image: linear-gradient(#041833, #154580);
        box-sizing: border-box;
        font-family: 'Inter' , sans-serif
    }

`

export default GlobalStyle