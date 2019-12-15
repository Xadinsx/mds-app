import React from 'react';

import { Grid, TextField, Typography, withStyles } from '@material-ui/core';

import { PagesStep } from '../../../../models/ui/Steps';
import styles from './ContentForm.styles';

interface ContentFormProps {
  classes: any;
  step: PagesStep;
}

const ContentForm = ({ classes, step }: ContentFormProps): JSX.Element => {
  return (
    <Grid item xs={12}>
      {step.questions.map(
        (question: { text: string }, index: number) => {
          return (
            <div key={index} className={classes.questionContainer}>
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
            </div>
          );
        }
      )}
    </Grid>
  );
};

export default withStyles(styles)(ContentForm);
