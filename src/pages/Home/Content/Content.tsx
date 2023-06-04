import React from 'react';

import { Button, Grid, Typography, withStyles } from '@material-ui/core';

import { PagesStep, DynamicQuestionType } from '../../../models/ui/Steps';
import { convertToPageStepsCookie } from '../../../Utils/Content/PageStepsCookie.model';

import styles from './Content.styles';

import ContentForm from './Form/ContentForm';
import { ExportToCsv } from 'export-to-csv';
import Iframe from 'react-iframe';

interface ComponentProps {
  classes: any;
  setActiveStep: (stepIndex: number) => boolean;
  activeStep: number;
  pageStepsContent: PagesStep[];
  handleAnswerChange: (index: number, value: any, prop?: string) => void;
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
      const encodedCookie: string = new Buffer(
        JSON.stringify(
          convertToPageStepsCookie(pageStepsContent, activeStep + 1)
        )
      ).toString('base64');
      cookies.set('app-state', { state: encodedCookie });
    }
  };

  const options = {
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalSeparator: '.',
    showLabels: true,
    showTitle: true,
    title: 'My Awesome CSV',
    useTextFile: false,
    useBom: true,
    useKeysAsHeaders: true
  };

  const csvExporter = new ExportToCsv(options);

  const handleTerminarClick = () => {
    handleContinuarClick();

    const dataToExport: any = [];

    pageStepsContent.forEach(step => {
      step.questions.map((question: any) => {
        if (question.multiple) {
          dataToExport.push({
            title: question.multiple.text,
            answer: question.multiple.options[parseInt(question.answer)]
              ? question.multiple.options[parseInt(question.answer)].text
              : ''
          });
        } else {
          if (question.answer) {
            dataToExport.push({
              title: question.text,
              answer: question.answer
            });
          }
        }
      });
    });

    if (activeStep + 1 === pageStepsContent.length) {
      csvExporter.generateCsv(JSON.stringify(dataToExport));
    }
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
            <div className={classes.buttonDivider} />
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
          {step.subtitle && step.tips && (
            <>
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
            </>
          )}
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
      return (
        <div style={{ height: '100%' }}>
          <Typography className={classes.subtitleText}>
            Partilhe o seu relatório:{' '}
          </Typography>
          <Iframe
            url="https://send-anywhere.com/"
            width="100%"
            height="90%"
            id="myId"
            className="myClassname"
            display="inline"
            position="relative"
          />
        </div>
      );
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
