import React, { Component } from 'react';

import { Button, Grid, Typography, withStyles } from '@material-ui/core';
import { PagesStep } from '../../../models/ui/Steps';

import styles from './Content.styles';

import ContentForm from './Form/ContentForm';

interface ComponentProps {
  classes: any;
  setActiveStep: (stepIndex: number) => void;
  activeStep: number;
  pageStepsContent: PagesStep[];
  handleTextChange: (index: number, value: string) => void;
  hasBeenChecked: boolean;
  updateProgressStep: () => void;
}

const Content = ({
  classes,
  activeStep,
  setActiveStep,
  pageStepsContent,
  handleTextChange,
  hasBeenChecked,
  updateProgressStep
}: ComponentProps): JSX.Element => {
  const renderActionButtonsFooter = () => {
    updateProgressStep();
    return (
      <div className={classes.actionButtons}>
        {activeStep >= 1 && activeStep <= pageStepsContent.length - 1 && (
          <Button onClick={() => setActiveStep(activeStep - 1)}>
            <Typography>Retroceder</Typography>
          </Button>
        )}

        {activeStep < pageStepsContent.length - 1 && (
          <>
            <div className={classes.buttonDivider} />
            <Button onClick={() => setActiveStep(activeStep + 1)}>
              <Typography>Continuar</Typography>
            </Button>
          </>
        )}
        {activeStep === pageStepsContent.length - 1 && (
          <>
            <div className={classes.buttonDivider} />
            <Button onClick={() => setActiveStep(activeStep + 1)}>
              <Typography>Terminar</Typography>
            </Button>
          </>
        )}
      </div>
    );
  };

  const renderPageContent = () => {
    const step: PagesStep = pageStepsContent[activeStep];
    if (step) {
      return (
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography className={classes.titleText}>{step.title}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography style={{ whiteSpace: 'pre-wrap' }}>
              {step.content}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography className={classes.subtitleText}>
              {step.subtitle}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography style={{ whiteSpace: 'pre-wrap' }}>
              {step.tips}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography className={classes.subtitleText}>
              {'Questões'}
            </Typography>
          </Grid>
          <ContentForm
            hasBeenChecked={hasBeenChecked}
            handleTextChange={handleTextChange}
            step={step}
          />
        </Grid>
      );
    } else {
      return <div />;
    }
  };

  return (
    <div className={classes.contentWrapper}>
      <div className={classes.content}>
        {renderPageContent()}
        {renderActionButtonsFooter()}
      </div>
    </div>
  );
};

export default withStyles(styles)(Content);
