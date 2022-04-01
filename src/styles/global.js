import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --white: #FFFFFF;
    --transparent_black: rgba(0, 0, 0, 0.32);
    --transparent_white: rgba(255, 255, 255, 0.4);
    --pink: #B22E6F;

    --primary_font: 'Heebo', sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    border: none;
  }

  body {
    font-family: var(--primary_font);
  }

  button {
    cursor: pointer;
    font-family: inherit;
  }

  li {
    list-style: none;
  }
`;
