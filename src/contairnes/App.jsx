import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import Movies from './Movies';
import MovieDetails from './MovieDetails';
import SearchMovie from './SearchMovie';
import ErrorBoundary from '../components/errors/ErrorBoundary';

const App = () => (
  <ErrorBoundary>
    <Switch>
      <Route exact path="/" component={SearchMovie} />
      <Route exact path="/:id" component={MovieDetails} />
    </Switch>
    <Movies />
    <Footer />
  </ErrorBoundary>
);

export default App;
