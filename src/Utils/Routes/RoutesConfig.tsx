import React from 'react';

import { RouteProps } from '../../models/ui/Routes';
import Home from '../../pages/Home/Home';

// Logged out routes

// Logged in routes
export const HOME_ROUTE: RouteProps = {
  exact: true,
  key: 'home',
  path: '/',
  page: (customProps: any) => (props: any): JSX.Element => (
    <Home title="Home" content={undefined} {...customProps} {...props} />
  )
};

export const STEPS_ROUTE: RouteProps = {
  exact: true,
  key: 'steps',
  path: '/steps',
  page: (customProps: any) => (props: any): JSX.Element => (
    <Home title="Steps" content={undefined} {...customProps} {...props} />
  )
};

/* Exports */
export const ROUTES = [HOME_ROUTE, STEPS_ROUTE];
