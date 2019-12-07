// React
import React from 'react';
import { Router } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';

// Material UI
import { MuiThemeProvider } from '@material-ui/core';
import Theme from './Theme';

// History
import History from './history';
import Routes from './Utils/Routes/Routes';

// Components
// Logged in routes

/* This is our App entry */
const App = (): JSX.Element => {
  return (
    <MuiThemeProvider theme={Theme}>
      <CookiesProvider>
        <Router history={History}>{Routes()}</Router>
      </CookiesProvider>
    </MuiThemeProvider>
  );
};

export default App;
