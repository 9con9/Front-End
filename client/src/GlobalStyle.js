import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Noto Sans KR', sans-serif;
    line-height: 1.5;
    letter-spacing: -0.5;
  }

  h2{
    font-size: 30px;
  }

  p{
    font-size: 14px;
  }

  h4{
    color:gray;
  }
`;

export default GlobalStyle;