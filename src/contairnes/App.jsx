import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import Movies from './Movies';
import MovieDetails from './MovieDetails';
import SearchMovie from './SearchMovie';
import ErrorBoundary from '../components/errors/ErrorBoundary';
import ErrorView from '../components/errors/ErrorView';

const App = () => (
  <>
    <ErrorBoundary>
      <Switch>
        <Route exact path="/" component={SearchMovie} />
        <Route exact path="/film/:id" component={MovieDetails} />
        <Route
          exact
          path="/search/:search"
          render={() => (
            <>
              <SearchMovie />
              <Movies />
            </>
          )}
        />
        <Route exact path="*" render={() => <ErrorView error="404" errorLabel="Page Not Found" />} />
      </Switch>
    </ErrorBoundary>
    <Footer />
  </>
);

export default App;
