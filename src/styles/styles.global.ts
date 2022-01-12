import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
  ${normalize}

  html,
  body {
  }

  * {
    box-sizing: border-box;
  }

  html {
    overflow-y: scroll;
  }
`;

export default GlobalStyle;
