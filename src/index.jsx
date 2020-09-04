import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import { BACKGROUND_SECONDARY, TEXT_PRIMARY } from './theme';

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    height: 100%;
    background: ${BACKGROUND_SECONDARY};
    color: ${TEXT_PRIMARY};
    margin: auto;
    font-family: "Yu Gothic UI Light", sans-serif;
    border-color: ${TEXT_PRIMARY};
  }

  #root {
    height: 100%;
  }

  @media (min-width: 1200px) {
    body {
      padding: 0 10%;
    }
  }

  @media (min-width: 1920px) {
    body {
      padding: 0 20%;
    }
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
