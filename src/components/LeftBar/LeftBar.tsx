// React
import React from 'react';

// Router
import { RouteComponentProps } from 'react-router-dom';

// Material UI
import { withStyles, Typography, Grid } from '@material-ui/core';

// Styles
import styles from './LeftBar.styles';
import { pagesStep } from '../../models/ui/Steps';
import { pagesStepsContent } from '../../pages/Home/Content';

interface Props extends RouteComponentProps {
  classes: any;
  activeStep: number;
  handleClickStep: (clickedStep: number) => void;
}

const LeftBar = ({
  classes,
  activeStep,
  handleClickStep
}: Props): JSX.Element => {
  return (
    <Grid container className={classes.stepsContainer}>
      {pagesStepsContent.map((content: pagesStep, index: number) => {
        return (
          <Grid item container xs={12}>
            <Grid item xs={6} className={classes.gridContainer}>
              <div
                className={classes.numberContainer}
                onClick={(): void => handleClickStep(index)}
              >
                <Typography className={classes.stepNumberText}>
                  {index + 1}
                </Typography>
              </div>
            </Grid>
            <Grid item xs={6} className={classes.textLabelContainer}>
              <Typography className={classes.stepNumberTextWhite}>
                {`Fase ${index + 1}`}
              </Typography>
            </Grid>
            {index !== pagesStepsContent.length - 1 && (
              <Grid item xs={6} className={classes.separatorContainer}>
                <div className={classes.stepSeparator}></div>
              </Grid>
            )}
          </Grid>
        );
      })}
    </Grid>
  );
};

export default withStyles(styles)(LeftBar);
