import React from 'react';

import { LinearProgress, Typography, withStyles } from '@material-ui/core';

import styles from './TopBar.styles';

const BorderLinearProgress = withStyles({
  root: {
    height: 10,
    backgroundColor: 'white'
  },
  bar: {
    backgroundColor: '#ff6c5c'
  }
})(LinearProgress);

interface ComponentProps {
  classes: any,
  progress: number
}

const TopBar = ({ classes, progress }: ComponentProps) => {
  return (
    <div className={classes.topBar}>
      <div>
        <Typography className={classes.topBarText}>
          Managing Requirements, the Agile Way
        </Typography>
      </div>
      <div className={classes.progressContainer}>
        <Typography className={classes.progressText}>{`${progress}% Completo`}</Typography>
        <BorderLinearProgress
          className={classes.margin}
          variant="determinate"
          color="secondary"
          value={progress}
        />
      </div>
    </div>
  );
};

export default withStyles(styles)(TopBar);
