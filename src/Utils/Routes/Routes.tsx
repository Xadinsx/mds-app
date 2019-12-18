// React
import React from 'react';
import { ReactCookieProps } from 'react-cookie';
import { Switch, Route } from 'react-router-dom';

// Routes Config
import { ROUTES } from './RoutesConfig';

// Models
import { RouteProps } from '../../models/ui/Routes';

const Routes = (cookies: ReactCookieProps): JSX.Element => {
  return (
    <Switch>
      {ROUTES.map((route: RouteProps) => (
        <Route
          exact={route.exact}
          key={route.key}
          path={route.path}
          render={route.page({
            defaultRoute: '/',
            cookies: cookies
          })}
        />
      ))}
    </Switch>
  );
};

export default Routes;
