import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

*, *::before, *::after {
  box-sizing: border-box;
}

/* * {
  border: 0.5px solid black;
} */

* {
  margin: 0;
}

html, body {
  height: 100%;
}

body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  background-color: hsla(204deg 70% 42% / .9);
  font-family: 'Recursive', sans-serif;
}

img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}

input, button, textarea, select {
  font: inherit;
}

p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}

#root {
  isolation: isolate;
}
`;

export default GlobalStyles;
