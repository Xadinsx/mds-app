// React
import React from 'react';
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
  pageStepsContentState: PagesStep[];
  resetPagesStepContent: () => void;
}

const LeftBar = ({
                   classes,
                   handleClickStep,
                   activeStep,
                   cookies,
                   pageStepsContentState,
                   resetPagesStepContent
                 }: Props): JSX.Element => {
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
                    index + 1 <= activeStep && classes.hoverStep
                  ].join(' ')}
                  onClick={(): void => handleClickStep(index)}
                >
                  {index + 1 <= activeStep ? (
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
                <Grid item xs={6} className={classes.separatorContainer}>
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
