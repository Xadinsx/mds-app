import React from 'react';

import { Input, MenuItem, Select, TextField, Typography, withStyles } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CloseIcon from '@material-ui/icons/Close';

import { SelectItemModel, UserStoryQuestionModel } from '../../../../models/ui/Steps';
import styles from './ContentForm.styles';

interface UserStoryQuestionProps {
  classes: any;
  question: UserStoryQuestionModel;
  requirementsSelectList: SelectItemModel[];
  addQuestion: () => void;
  removeQuestion: () => void;
  handleAnswerChange: (value: any, prop: string) => void;
}

const UserStoryQuestion = ({
                               classes,
                               question,
                               requirementsSelectList,
                               addQuestion,
                               removeQuestion,
                               handleAnswerChange
                             }: UserStoryQuestionProps) => {

  return (
    <div className={classes.questionContainer}>
      <hr/>
      <Typography className={classes.phaseFourQuestionTitle}>User Story
        nº {question.num} (U{question.num})</Typography>
      <div className={classes.singleLineFormGroup}>
        <Typography>Ator:</Typography>
        <Input
          className={classes.questionInput}
          required={!!question.goal || !!question.action || question.requirement !== -1}
          value={question.actor}
          onChange={(e) => handleAnswerChange(e.target.value, 'actor')}
        />
      </div>
      <div className={classes.questionContainer}>
        <Typography>Ação:</Typography>
        <TextField
          className={classes.questionInput}
          required={!!question.actor || !!question.goal || question.requirement !== -1}
          value={question.action}
          variant="outlined"
          multiline
          rows={4}
          rowsMax={4}
          onChange={(e) => handleAnswerChange(e.target.value, 'action')}
        />
      </div>
      <div className={classes.questionContainer}>
        <Typography>Objectivo:</Typography>
        <TextField
          className={classes.questionInput}
          required={!!question.actor || !!question.action || question.requirement !== -1}
          value={question.goal}
          variant="outlined"
          multiline
          rows={4}
          rowsMax={4}
          onChange={(e) => handleAnswerChange(e.target.value, 'goal')}
        />
      </div>
      <div className={classes.singleLineFormGroup}>
        <Typography>Requisito:</Typography>
        <Select
          className={classes.questionInput}
          required={!!question.actor || !!question.action || !!question.goal}
          value={question.requirement}
          onChange={(e) => handleAnswerChange(e.target.value, 'requirement')}
        >
          {requirementsSelectList.map((requirementSelectItem: SelectItemModel) => {
            return (
              <MenuItem key={requirementSelectItem.index}
                        value={requirementSelectItem.index}
              >
                {requirementSelectItem.name}
              </MenuItem>
            )
          })}
        </Select>
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

export default withStyles(styles)(UserStoryQuestion);
