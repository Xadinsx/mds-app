import React, { Component } from 'react';


import {
  Button,
  Grid,
  Typography,
  withStyles
} from '@material-ui/core';
import { ReactCookieProps } from 'react-cookie';

import { PagesStep, DynamicQuestionType } from '../../../models/ui/Steps';
import { convertToPageStepsCookie } from '../../../Utils/Content/PageStepsCookie.model';

import styles from './Content.styles';

import ContentForm from './Form/ContentForm';

interface ComponentProps {
  classes: any;
  setActiveStep: (stepIndex: number) => boolean;
  activeStep: number;
  pageStepsContent: PagesStep[];
  handleAnswerChange: (index: number, value: any, prop?:string) => void;
  hasBeenChecked: boolean;
  updateProgressStep: () => void;
  addQuestion: (questionIndex: number, type: DynamicQuestionType) => void;
  removeQuestion: (questionIndex: number) => void;
  cookies: any;
}

const Content = ({
                   classes,
                   activeStep,
                   setActiveStep,
                   pageStepsContent,
                   handleAnswerChange,
                   hasBeenChecked,
                   updateProgressStep,
                   addQuestion,
                   removeQuestion,
                   cookies
                 }: ComponentProps): JSX.Element => {

  const handleContinuarClick = () => {
    const changedStep: boolean = setActiveStep(activeStep + 1);

    if (changedStep && cookies) {
      const encodedCookie: string = new Buffer(JSON.stringify(convertToPageStepsCookie(pageStepsContent, activeStep + 1))).toString('base64');
      cookies.set('app-state', { state: encodedCookie });
    }
  };

  const handleTerminarClick = () => {
    handleContinuarClick();
  };

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
            <div className={classes.buttonDivider}/>
            <Button onClick={handleContinuarClick}>

              <Typography>Continuar</Typography>
            </Button>
          </>
        )}
        {activeStep === pageStepsContent.length - 1 && (
          <>
            <div className={classes.buttonDivider} />
            <Button onClick={handleTerminarClick}>
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
            handleAnswerChange={handleAnswerChange}
            addQuestion={addQuestion}
            removeQuestion={removeQuestion}
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
