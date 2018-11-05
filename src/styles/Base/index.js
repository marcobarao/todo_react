import { createGlobalStyle } from "styled-components";

const Base = createGlobalStyle`
  html, body {
    height: 100%;
  }
  body {
    display: flex;
    background: var(--color-primary);
    font-family: "Ubuntu", sens-serif;
    font-size: 16px;
    justify-content: center;
    align-items: center;
  }
`;

export default Base;
