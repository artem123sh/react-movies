import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './contairnes/App';
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
    display: flex;
    flex-direction: column;
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
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
