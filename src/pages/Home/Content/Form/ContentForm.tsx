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

import {
  createEmptySelectItem,
  PagesStep,
  DynamicQuestionModel,
  DynamicQuestionType,
  QuestionModel,
  SelectItemModel
} from '../../../../models/ui/Steps';
import styles from './ContentForm.styles';
import FeatureQuestion from './FeatureQuestion';
import RequirementQuestion from './RequirementQuestion';
import UserStoryQuestion from './UserStoryQuestion';

interface ContentFormProps {
  classes: any;
  step: PagesStep;
  handleAnswerChange: (
    index: number,
    value: any,
    prop?: string,
    depthId?: string
  ) => void;
  addQuestion: (questionIndex: number, type: DynamicQuestionType) => void;
  removeQuestion: (questionIndex: number) => void;
  hasBeenChecked: boolean;
}

const ContentForm = ({
  classes,
  step,
  handleAnswerChange,
  hasBeenChecked,
  addQuestion,
  removeQuestion
}: ContentFormProps): JSX.Element => {
  let qDynamicCount: number[] = [0, 0, 0];
  const featuresSelectList: SelectItemModel[] = [createEmptySelectItem()];
  const requirementsSelectList: SelectItemModel[] = [createEmptySelectItem()];

  step.questions.forEach(
    (question: QuestionModel | DynamicQuestionModel, index: number) => {
      const qDynamic: DynamicQuestionModel = question as DynamicQuestionModel;

      if (qDynamic.type === 'Feature') {
        qDynamicCount[0]++;
        qDynamic.num = qDynamicCount[0];
        featuresSelectList.push({ index, name: `F${qDynamic.num}` });
      } else if (qDynamic.type === 'Requirement') {
        qDynamicCount[1]++;
        qDynamic.num = qDynamicCount[1];
        requirementsSelectList.push({ index, name: `R${qDynamic.num}` });
      } else if (qDynamic.type === 'UserStory') {
        qDynamicCount[2]++;
        qDynamic.num = qDynamicCount[2];
      }
    }
  );

  const renderOptionSubQuestions = (
    subQuestions: any,
    questionDepthId: string
  ) => {
    return subQuestions.map((question: any, index: number) => {
      if (question.text) {
        return (
          <div key={index} className={classes.questionContainer}>
            <Typography>
              {question.text}
              {question.required ? (
                <span className={classes.requiredLabelSpan}>*</span>
              ) : (
                ''
              )}
            </Typography>
            <TextField
              key={question.text}
              error={
                hasBeenChecked
                  ? question.required && question.answer === ''
                  : false
              }
              onChange={event =>
                handleAnswerChange(
                  index,
                  event.target.value,
                  undefined,
                  questionDepthId || ''
                )
              }
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
            <Typography className={classes.requiredLabel}>
              {question.multiple.text}
            </Typography>
            <RadioGroup
              aria-label=""
              name={`question${index}`}
              value={question.answer}
              onChange={(event): void =>
                handleAnswerChange(
                  index,
                  event.target.value,
                  undefined,
                  event.target.id || ''
                )
              }
            >
              {question.multiple.options.map(
                (option: { id: string; text: string }) => {
                  return (
                    <FormControlLabel
                      key={option.id}
                      value={option.id}
                      control={
                        <Radio
                          color="primary"
                          className={
                            hasBeenChecked &&
                            !question.answer &&
                            classes.errorRadio
                          }
                        />
                      }
                      label={option.text}
                    />
                  );
                }
              )}
            </RadioGroup>
            {hasBeenChecked && !question.answer && (
              <Typography style={{ color: 'red' }}>
                Escolha uma opção por favor.
              </Typography>
            )}
            {question.multiple &&
              question.answer !== '' &&
              question.multiple.options.map(
                (option: {
                  id: string;
                  text: string;
                  subQuestions: any;
                  depthId: string;
                }) => {
                  return (
                    option.id === question.answer &&
                    option.subQuestions &&
                    renderOptionSubQuestions(
                      option.subQuestions,
                      option.depthId || ''
                    )
                  );
                }
              )}
          </div>
        );
      }
    });
  };

  return (
    <Grid item xs={12}>
      {step.questions.map((question: any, index: number) => {
        if (question.text) {
          return (
            <div key={index} className={classes.questionContainer}>
              <Typography>
                {question.text}
                {question.required ? (
                  <span className={classes.requiredLabelSpan}>*</span>
                ) : (
                  ''
                )}
              </Typography>
              <TextField
                key={question.text}
                error={
                  hasBeenChecked
                    ? question.required && question.answer === ''
                    : false
                }
                onChange={event =>
                  handleAnswerChange(index, event.target.value)
                }
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
              <Typography className={classes.requiredLabel}>
                {question.multiple.text}
              </Typography>
              <RadioGroup
                aria-label=""
                name={`question${index}`}
                value={question.answer}
                onChange={(event): void =>
                  handleAnswerChange(index, event.target.value)
                }
              >
                {question.multiple.options.map(
                  (option: { id: string; text: string }) => {
                    return (
                      <FormControlLabel
                        key={option.id}
                        value={option.id}
                        control={
                          <Radio
                            color="primary"
                            className={
                              hasBeenChecked &&
                              !question.answer &&
                              classes.errorRadio
                            }
                          />
                        }
                        label={option.text}
                      />
                    );
                  }
                )}
              </RadioGroup>
              {hasBeenChecked && !question.answer && (
                <Typography style={{ color: 'red' }}>
                  Escolha uma opção por favor.
                </Typography>
              )}
              {question.multiple &&
                question.answer !== '' &&
                question.multiple.options.map(
                  (option: {
                    id: string;
                    text: string;
                    subQuestions: any;
                    depthId: string;
                  }) => {
                    return (
                      option.id === question.answer &&
                      option.subQuestions &&
                      renderOptionSubQuestions(
                        option.subQuestions,
                        option.depthId || ''
                      )
                    );
                  }
                )}
            </div>
          );
        } else if (question.type) {
          switch (question.type) {
            case 'Feature':
              return (
                <FeatureQuestion
                  key={index}
                  question={question}
                  addQuestion={() => addQuestion(index, question.type)}
                  removeQuestion={() => removeQuestion(index)}
                  handleAnswerChange={(value: any, prop: string) =>
                    handleAnswerChange(index, value, prop)
                  }
                />
              );
            case 'Requirement':
              return (
                <RequirementQuestion
                  key={index}
                  question={question}
                  addQuestion={() => addQuestion(index, question.type)}
                  removeQuestion={() => removeQuestion(index)}
                  handleAnswerChange={(value: any, prop: string) =>
                    handleAnswerChange(index, value, prop)
                  }
                  featuresSelectList={featuresSelectList}
                />
              );
            default:
              return (
                <UserStoryQuestion
                  key={index}
                  question={question}
                  addQuestion={() => addQuestion(index, question.type)}
                  removeQuestion={() => removeQuestion(index)}
                  handleAnswerChange={(value: any, prop: string) =>
                    handleAnswerChange(index, value, prop)
                  }
                  requirementsSelectList={requirementsSelectList}
                />
              );
          }
        }
      })}
    </Grid>
  );
};

export default withStyles(styles)(ContentForm);
