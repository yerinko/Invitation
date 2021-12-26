// styles/global-styles.ts

import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }
  body{
    font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  }
  a {
    color: #333;
    text-decoration: underline;
  }
  a:hover {
  color: #f5b31e !important;
}

  input, button {
    background-color: transparent;
    border: none;
    outline: none;
  }
  h1, h2, h3, h4, h5, h6, label{
    font-family: 'Avenir';
    // font-family:'Maven Pro', sans-serif;
  }
  label {
  font-family: 'Avenir';
  font-size: bold;
  }
  h1 {
    display: block;
    font-size: 2.25em;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
  }
   h2 {
    display: block;
    font-size: 2em;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
  }
  ul li {
     font-family: 'Avenir';
     font-size: 1em;
     line-height: 1.4em;
  }
    p {
     font-family: 'Avenir';
     font-size: 1em;
     line-height: 1.4em;
  }

  @media only screen and (max-width: 768px) {
    body {
      font-size: 12px;
    }
  }

  @media only screen and (max-width: 576px) {
    body {
      font-size: 10px;
    }
  }
`;

export default GlobalStyle;