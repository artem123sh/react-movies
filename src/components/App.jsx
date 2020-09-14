import React from 'react';
import Footer from './footer';
import Movies from './contairnes/Movies';
import ErrorBoundary from './errors/ErrorBoundary';
import HeaderContainer from './contairnes/Header';

const App = () => (
  <ErrorBoundary>
    <HeaderContainer />
    <Movies />
    <Footer />
  </ErrorBoundary>
);

export default App;
