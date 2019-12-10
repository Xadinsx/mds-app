// React
import React, { ReactNode, useState } from 'react';

// Router
import { RouteComponentProps } from 'react-router-dom';

// Material UI
import {
  withStyles,
  Typography,
  Grid,
  Button,
  TextField,
  LinearProgress
} from '@material-ui/core';

// Styles
import styles from './Home.styles';
import { pagesStepsContent } from './Content';
import { pagesStep } from '../../models/ui/Steps';
import LeftBar from '../../components/LeftBar/LeftBar';

interface Props extends RouteComponentProps {
  classes: any;
  title: string;
  content: ReactNode;
}

interface State {
  activeIcon: string;
}

const BorderLinearProgress = withStyles({
  root: {
    height: 10,
    backgroundColor: 'white'
  },
  bar: {
    backgroundColor: '#ff6c5c'
  }
})(LinearProgress);

const Home = ({ classes, title, content }: Props): JSX.Element => {
  const [activeStep, setActiveStep] = useState(0);

  const handleClickContinue = () => {
    if (true) {
      setActiveStep(activeStep + 1);
    }
  };

  const handleClickStep = (clickedStep: number): void => {
    if (true) {
      setActiveStep(clickedStep);
    }
  };

  return (
    <div className={classes.root}>
      <div className={classes.topBar}>
        <div>
          <Typography className={classes.topBarText}>
            Managing Requirements, the Agile Way
          </Typography>
        </div>
        <div className={classes.progressContainer}>
          <Typography className={classes.progressText}>{`${(activeStep /
            pagesStepsContent.length) *
            100}% Completo`}</Typography>
          <BorderLinearProgress
            className={classes.margin}
            variant="determinate"
            color="secondary"
            value={(activeStep / pagesStepsContent.length) * 100}
          />
        </div>
      </div>
      <div className={classes.leftBarContainer}>
        <div className={classes.leftBar}>
          {
            //@ts-ignore
            <LeftBar
              activeStep={activeStep}
              handleClickStep={handleClickStep}
            />
          }
        </div>
        <div className={classes.contentWrapper}>
          <div className={classes.content}>
            {/*!content ? <span>Empty</span> : content*/}
            {pagesStepsContent.map((step: pagesStep, index: number) => {
              if (index === activeStep) {
                return (
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <Typography className={classes.titleText}>
                        {step.title}
                      </Typography>
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
                    {step.questions.map(
                      (question: { text: string }, index: number) => {
                        return (
                          <Grid item xs={12}>
                            <Typography>{question.text}</Typography>
                            <TextField
                              className={classes.questionInput}
                              id="outlined-basic"
                              label={`Questão ${index + 1}`}
                              variant="outlined"
                              multiline
                              rows={4}
                              rowsMax={4}
                            />
                          </Grid>
                        );
                      }
                    )}
                  </Grid>
                );
              }
            })}
            <div className={classes.actionButtons}>
              {activeStep >= 1 && activeStep <= pagesStepsContent.length - 1 && (
                <Button onClick={(): void => setActiveStep(activeStep - 1)}>
                  <Typography>Retroceder</Typography>
                </Button>
              )}

              {activeStep < pagesStepsContent.length - 1 && (
                <>
                  <div className={classes.buttonDivider} />
                  <Button onClick={handleClickContinue}>
                    <Typography>Continuar</Typography>
                  </Button>
                </>
              )}
              {activeStep === pagesStepsContent.length - 1 && (
                <>
                  <div className={classes.buttonDivider} />
                  <Button onClick={handleClickContinue}>
                    <Typography>Terminar</Typography>
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(Home);
