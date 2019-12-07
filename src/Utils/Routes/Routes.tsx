// React
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Routes Config
import { ROUTES } from './RoutesConfig';

// Models
import { RouteProps } from '../../models/ui/Routes';

const Routes = (): JSX.Element => {
  return (
    <Switch>
      {ROUTES.map((route: RouteProps) => (
        <Route
          exact={route.exact}
          key={route.key}
          path={route.path}
          render={route.page({
            defaultRoute: '/'
          })}
        />
      ))}
    </Switch>
  );
};

export default Routes;
