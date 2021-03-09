import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { routes } from 'src/utils/routes';
import { MainPage } from 'src/pages/Main';
import { GamePage } from 'src/pages/Game';

export const Routes = () => (
  <Switch>
    <Route component={MainPage} path={routes.index} exact />
    <Route component={GamePage} path={routes.game} />
    <Redirect to={routes.index} />
  </Switch>
);
