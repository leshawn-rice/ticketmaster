import React from 'react';
import { Route, Switch } from 'react-router-dom';
// Components
import Home from './Home';

const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  );
}

export default Router;