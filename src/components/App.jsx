import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Footer from './footer/Footer';
import Movies from './contairnes/Movies';
import MovieDetails from './contairnes/MovieDetails';
import ErrorBoundary from './errors/ErrorBoundary';
import Header from './contairnes/Header';

const App = () => (
  <ErrorBoundary>
    <Switch>
      <Route exact path="/" component={Header} />
      <Route exact path="/:id" component={MovieDetails} />
    </Switch>
    <Movies />
    <Footer />
  </ErrorBoundary>
);

export default App;
