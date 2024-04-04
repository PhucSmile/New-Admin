import { createGlobalStyle } from 'styled-components';
import 'antd/dist/reset.css';

export const GlobalStyle = createGlobalStyle`
  html {
    --white: #fff;
    --black: #000;
    --redText: #c51143;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
