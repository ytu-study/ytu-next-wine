import { createGlobalStyle } from 'styled-components';

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
    color: var(--text-main);
    background-color: var(--bg-main);
    padding-top: 128px;
    transition: background 0.2s ease-in, color 0.2s ease-in;
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

  body {
    // major(theme)
    --major-main: #BA1628;
    --major-second: #8E041A;

    // text(common)
    --text-title: #111111;
    --text-subTitle: #1D1D1D;
    --text-main: #1E1E1E;
    --text-second: #575757;
    --text-third: #989999;
    --text-fourth: #A8A5A3;
    // text(individual)
    --text-input: #333333;
    --text-rating: #A26F01;
    --text-label: #DBA969;
    --text-label2: #d5A184;

    // background(common)
    --bg-main: #FFFFFF;
    --bg-second: #FAFAFA;
    --bg-third: #F7F3F0;
    // background(individual)
    --bg-progressBar: #E9E9E9;
    --bg-button: #02A78B;
    --bg-rating: #F9F7D6;
    --bg-ratingStar: #EFA000;
    --bg-label: #333333;
    
    // border(common)
    --border-main: #DEDEDE solid 1px;
    --border-second: #E4E4E4 solid 1px;
    --border-third: #EAE0DA solid 1px;
  }

  body[data-theme="dark"] {
    // yet test!
    --text-title: #111111;
    --text-main: #FFFFFF;
    --bg-main: #1C1C1F;
    --border-main: #DEDEDE solid 1px;
  }
`;

export default GlobalStyle;
