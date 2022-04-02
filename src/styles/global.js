import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --transparent_black: rgba(0, 0, 0, 0.32);
    --transparent_white: rgba(255, 255, 255, 0.4);
    --white: #FFFFFF;
    --gray: #333333;
    --light_gray: #999999;
    --pink: #B22E6F;
    --dark_pink: #AB2680;

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

  h1, h2, h3 {
    font-size: 1rem;
  }

  button {
    cursor: pointer;
    font-family: inherit;
  }

  li {
    list-style: none;
  }
`;
