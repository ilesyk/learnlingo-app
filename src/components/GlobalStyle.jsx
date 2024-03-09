import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';
import { theme } from './theme';
export const GlobalStyle = createGlobalStyle`

   html {
    box-sizing: content-box;
  }

  *:before,
  *:after {
    box-sizing: inherit;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  body {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    font-size: 16px;
    color: ${p => theme.colors.dark};
    background-color: ${p => theme.colors.white};
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  h1,h2,h3,h4,h5,h6,p {
    margin: 0;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    font-family: inherit;
    padding: 0;
    margin: 0;
  }

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background: #D7E3FF;
    width: 3px;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: #9EBBFF;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #3470ff;
  }
`;
