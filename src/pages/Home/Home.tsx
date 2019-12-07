// React
import React, { ReactNode } from 'react';

// Router
import { RouteComponentProps } from 'react-router-dom';

// Material UI
import { withStyles, Typography } from '@material-ui/core';

// Styles
import styles from './Home.styles';

interface Props extends RouteComponentProps {
  classes: any;
  title: string;
  content: ReactNode;
}

interface State {
  activeIcon: string;
}

const Home = ({ classes, title, content }: Props): JSX.Element => {
  return (
    <div className={classes.root}>
      <div className={classes.topBar}>
        <Typography className={classes.topBarText}>
          Managing Requirements, the Agile Way
        </Typography>
      </div>
      <div className={classes.leftBarContainer}>
        <div className={classes.leftBar}>
          <Typography> barra</Typography>
        </div>
        <div className={classes.contentWrapper}>
          <div className={classes.content}>
            {!content ? <span>Empty</span> : content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(Home);
