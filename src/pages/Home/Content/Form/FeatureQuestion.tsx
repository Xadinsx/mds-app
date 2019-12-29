import React from 'react';

import { Input, TextField, Typography, withStyles } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CloseIcon from '@material-ui/icons/Close';

import { FeatureQuestionModel } from '../../../../models/ui/Steps';
import styles from './ContentForm.styles';

interface FeatureQuestionProps {
  classes: any;
  question: FeatureQuestionModel;
  addQuestion: () => void;
  removeQuestion: () => void;
  handleAnswerChange: (value: any, prop: string) => void;
}

const FeatureQuestion = ({
                           classes,
                           question,
                           addQuestion,
                           removeQuestion,
                           handleAnswerChange
                         }: FeatureQuestionProps) => {
  return (
    <div className={classes.questionContainer}>
      <hr/>
      <div>
        <Typography className={classes.phaseFourQuestionTitle}>Funcionalidade
          nº {question.num} (F{question.num})</Typography>
        <TextField
          className={classes.questionInput}
          required={!!question.priority || !!question.sprint}
          value={question.description}
          id="outlined-basic"
          variant="outlined"
          multiline
          rows={4}
          rowsMax={4}
          onChange={(e) => handleAnswerChange(e.target.value, 'description')}
        />
      </div>
      <div className={classes.singleLineFormGroup}>
        <Typography>Prioridade:</Typography>
        <Input
          type={"number"}
          className={classes.questionInput}
          required={!!question.description || !!question.sprint}
          value={question.priority}
          onChange={(e) => handleAnswerChange(e.target.value, 'priority')}
        />
      </div>
      <div className={classes.singleLineFormGroup}>
        <Typography>Sprint:</Typography>
        <Input
          type={"number"}
          className={classes.questionInput}
          required={!!question.description || !!question.priority}
          value={question.sprint}
          onChange={(e) => handleAnswerChange(e.target.value, 'sprint')}
        />
      </div>
      <div className={classes.addQuestionButtonContainer}>
        <AddCircleIcon color="primary" onClick={addQuestion} className={classes.actionQuestionButton}/>
      </div>
      {
        question.num !== 1
          ? (
            <div className={classes.removeQuestionButtonContainer}>
              <CloseIcon color="disabled" onClick={removeQuestion} className={classes.actionQuestionButton}/>
            </div>
          )
          : null
      }
    </div>
  );
};

export default withStyles(styles)(FeatureQuestion);
