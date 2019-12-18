// React
import React from 'react';
import { Router } from 'react-router-dom';
import { CookiesProvider, ReactCookieProps, withCookies } from 'react-cookie';

// Material UI
import { MuiThemeProvider } from '@material-ui/core';
import Theme from './Theme';

// History
import History from './history';
import Routes from './Utils/Routes/Routes';

// Components
// Logged in routes

/* This is our App entry */
const App = (cookies: ReactCookieProps): JSX.Element => {
  return (
    <MuiThemeProvider theme={Theme}>
      <CookiesProvider>
        <Router history={History}>{Routes(cookies)}</Router>
      </CookiesProvider>
    </MuiThemeProvider>
  );
};

export default withCookies(App);
