// React
import React, { useState } from 'react';
import { ReactCookieProps } from 'react-cookie';

// Router
import { RouteComponentProps } from 'react-router-dom';

// Material UI
import { withStyles, Typography, Grid } from '@material-ui/core';
import { Check } from '@material-ui/icons';
import pageStepsContent from '../../Utils/Content/PageStepsContent';
import CookiesMenu from './CookiesMenu/CookiesMenu';

// Styles
import styles from './LeftBar.styles';
import { PagesStep } from '../../models/ui/Steps';

interface Props extends RouteComponentProps {
  classes: any;
  activeStep: number;
  handleClickStep: (clickedStep: number) => void;
  cookies: ReactCookieProps;
  maxActiveStep: number;
  resetPagesStepContent: () => void;
}

const LeftBar = ({
                   classes,
                   handleClickStep,
                   activeStep,
                   cookies,
                   maxActiveStep,
                   resetPagesStepContent
                 }: Props): JSX.Element => {
  console.log(maxActiveStep)
  return (
    <div className={classes.leftBar}>
      <Grid container className={classes.stepsContainer}>
        {pageStepsContent.map((content: PagesStep, index: number) => {
          return (
            <Grid item container xs={12} key={index}>
              <Grid item xs={6} className={classes.gridContainer}>
                <div
                  className={[
                    classes.numberContainer,
                    index < maxActiveStep && classes.hoverStep,
                    index > maxActiveStep ? classes.blocked : ''
                  ].join(' ')}
                  onClick={(): void | null => index > maxActiveStep ? null : handleClickStep(index)}
                >
                  {index < maxActiveStep ? (
                    <Check color="primary"/>
                  ) : (
                    <Typography className={classes.stepNumberText}>
                      {index + 1}
                    </Typography>
                  )}
                </div>
              </Grid>
              <Grid item xs={6} className={classes.textLabelContainer}>
                <Typography className={classes.stepNumberTextWhite}>
                  {`Fase ${index + 1}`}
                </Typography>
              </Grid>
              {index !== pageStepsContent.length - 1 && (
                <Grid item xs={6} className={[classes.separatorContainer, index > maxActiveStep ? classes.blocked : ''].join(' ')}>
                  <div className={classes.stepSeparator}></div>
                </Grid>
              )}
            </Grid>
          );
        })}
      </Grid>
      <Grid container>
        <CookiesMenu {...cookies}
                     resetPagesStepContent={resetPagesStepContent}
        />
      </Grid>
    </div>
  );
};

export default withStyles(styles)(LeftBar);
