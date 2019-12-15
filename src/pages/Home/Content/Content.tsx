import React, { Component } from 'react';

import {
  Button,
  Grid,
  Typography,
  withStyles
} from '@material-ui/core';
import { PagesStep } from '../../../models/ui/Steps';

import styles from './Content.styles';
import pageStepsContent from '../../../Utils/Content/PageStepsContent';
import ContentForm from './Form/ContentForm';

interface ComponentProps {
  classes: any;
  setActiveStep: (stepIndex: number) => void;
  activeStep: number;
}

class Content extends Component<ComponentProps, any> {
  render() {
    const { classes }: ComponentProps = this.props;
    return (
      <div className={classes.contentWrapper}>
        <div className={classes.content}>
          {this.renderPageContent()}
          {this.renderActionButtonsFooter()}
        </div>
      </div>
    );
  }

  renderActionButtonsFooter = () => {
    const { classes, activeStep }: ComponentProps = this.props;

    return (
      <div className={classes.actionButtons}>
        {activeStep >= 1 && activeStep <= pageStepsContent.length - 1 && (
          <Button onClick={this.handleClickBack}>
            <Typography>Retroceder</Typography>
          </Button>
        )}

        {activeStep < pageStepsContent.length - 1 && (
          <>
            <div className={classes.buttonDivider} />
            <Button onClick={this.handleClickContinue}>
              <Typography>Continuar</Typography>
            </Button>
          </>
        )}
        {activeStep === pageStepsContent.length - 1 && (
          <>
            <div className={classes.buttonDivider} />
            <Button onClick={this.handleClickContinue}>
              <Typography>Terminar</Typography>
            </Button>
          </>
        )}
      </div>
    );
  };

  renderPageContent = () => {
    const { classes, activeStep }: ComponentProps = this.props;
    const step: PagesStep = pageStepsContent[activeStep];
    if (step) {
      return (
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography className={classes.titleText}>{step.title}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>{step.content}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography className={classes.subtitleText}>
              {step.subtitle}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>{step.tips}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography className={classes.subtitleText}>
              {'Questões'}
            </Typography>
          </Grid>
          <ContentForm step={step} />
        </Grid>
      );
    } else {
      return <div />;
    }
  };

  handleClickContinue = () => {
    if (true) {
      this.setActiveStep(this.props.activeStep + 1);
    }
  };

  handleClickBack = () => {
    this.setActiveStep(this.props.activeStep - 1);
  };

  setActiveStep = (stepId: number) => {
    this.props.setActiveStep(stepId);
  };
}

export default withStyles(styles)(Content);
