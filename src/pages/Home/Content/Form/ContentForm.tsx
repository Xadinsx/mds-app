import React from 'react';

import {
  Grid,
  TextField,
  Typography,
  withStyles,
  RadioGroup,
  FormControlLabel,
  Radio
} from '@material-ui/core';

import { PagesStep } from '../../../../models/ui/Steps';
import styles from './ContentForm.styles';

interface ContentFormProps {
  classes: any;
  step: PagesStep;
  handleTextChange: (index: number, value: string) => void;
  hasBeenChecked: boolean;
}

const ContentForm = ({
  classes,
  step,
  handleTextChange,
  hasBeenChecked
}: ContentFormProps): JSX.Element => {
  return (
    <Grid item xs={12}>
      {step.questions.map((question: any, index: number) => {
        if (question.text) {
          return (
            <div key={index} className={classes.questionContainer}>
              <Typography>{question.text}</Typography>
              <TextField
                key={question.text}
                error={
                  hasBeenChecked
                    ? question.required && question.answer === ''
                    : false
                }
                onChange={event => handleTextChange(index, event.target.value)}
                className={classes.questionInput}
                value={question.answer}
                id="outlined-basic"
                label={`Questão ${index + 1}`}
                variant="outlined"
                multiline
                required={question.required}
                rows={4}
                rowsMax={4}
              />
            </div>
          );
        } else if (question.multiple) {
          return (
            <div key={index} className={classes.questionContainer}>
              <Typography>{question.multiple.text}</Typography>
              <RadioGroup
                aria-label=""
                name={`question${index}`}
                value={question.answer}
                onChange={(event): void =>
                  handleTextChange(index, event.target.value)
                }
              >
                {question.multiple.options.map(
                  (option: { id: string; text: string }) => {
                    return (
                      <FormControlLabel
                        key={option.id}
                        value={option.id}
                        control={<Radio color="primary" />}
                        label={option.text}
                      />
                    );
                  }
                )}
              </RadioGroup>
            </div>
          );
        }
      })}
    </Grid>
  );
};

export default withStyles(styles)(ContentForm);
