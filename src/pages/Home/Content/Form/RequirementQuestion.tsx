import React from 'react';

import {
  MenuItem,
  Select,
  TextField,
  Typography,
  withStyles
} from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CloseIcon from '@material-ui/icons/Close';

import {
  RequirementQuestionModel,
  SelectItemModel
} from '../../../../models/ui/Steps';
import styles from './ContentForm.styles';

interface FeatureQuestionProps {
  classes: any;
  question: RequirementQuestionModel;
  featuresSelectList: SelectItemModel[];
  addQuestion: () => void;
  removeQuestion: () => void;
  handleAnswerChange: (value: any, prop: string) => void;
}

const RequirementQuestion = ({
  classes,
  question,
  featuresSelectList,
  addQuestion,
  removeQuestion,
  handleAnswerChange
}: FeatureQuestionProps) => {
  return (
    <div className={classes.questionContainer}>
      <hr />
      <div>
        <Typography className={classes.phaseFourQuestionTitle}>
          Requisito nº {question.num} (R{question.num})
        </Typography>
        <TextField
          className={classes.questionInput}
          required={question.feature !== -1}
          value={question.description}
          id="outlined-basic"
          variant="outlined"
          multiline
          rows={4}
          rowsMax={4}
          onChange={e => handleAnswerChange(e.target.value, 'description')}
        />
      </div>
      <div className={classes.singleLineFormGroup}>
        <Typography>Funcionalidade:</Typography>
        <Select
          className={classes.questionInput}
          required={!!question.description}
          value={question.feature}
          onChange={e => handleAnswerChange(e.target.value, 'feature')}
        >
          {featuresSelectList.map((featuresSelectItem: SelectItemModel) => {
            return (
              <MenuItem
                key={featuresSelectItem.index}
                value={featuresSelectItem.index}
              >
                {featuresSelectItem.name}
              </MenuItem>
            );
          })}
        </Select>
      </div>
      <div className={classes.addQuestionButtonContainer}>
        <AddCircleIcon
          color="primary"
          onClick={addQuestion}
          className={classes.actionQuestionButton}
        />
      </div>
      {question.num !== 1 ? (
        <div className={classes.removeQuestionButtonContainer}>
          <CloseIcon
            color="disabled"
            onClick={removeQuestion}
            className={classes.actionQuestionButton}
          />
        </div>
      ) : null}
    </div>
  );
};

export default withStyles(styles)(RequirementQuestion);
