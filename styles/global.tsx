import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font: inherit;
    color: inherit;
  }
  *, :after, :before, ::before, ::after {
    box-sizing: border-box;
  }
  :root {
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;
    -webkit-text-size-adjust: 100%;
    text-size-adjust: 100%;
    overflow-wrap: break-word;
    word-break: break-word;
  }
  html, body, #__next {
    height: 100%;
  }
  body {
    color: ${({ theme }) => theme.text.main};
    background-color: ${({ theme }) => theme.background.main};
    padding-top: 128px;
    /* transition: background 0.2s ease-in, color 0.2s ease-in; */
  }
  img, picture, video, svg, canvas {
    display: block;
    max-width: 100%;
  }
  button,
  [role='button'] {
    border: 0;
    border-radius: 0;
    background: none;
    user-select: none;
  }
  ul, ol {
    list-style: none;
  }
  a {
    text-decoration: none;
  }
  input, img, fieldset, iframe {
    border: 0;
  }
  address, em, i {
    font-style: normal;
  }
  :focus {
    outline: none;
  }
`;

export default GlobalStyle;
