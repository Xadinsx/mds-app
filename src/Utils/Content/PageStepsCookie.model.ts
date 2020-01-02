import {
  FeatureQuestionModel,
  PagesStep,
  DynamicQuestionModel,
  DynamicQuestionType,
  RequirementQuestionModel,
  UserStoryQuestionModel,
  QuestionModel,
  createEmptyDynamicQuestion
} from '../../models/ui/Steps';
import pageStepsContent, { REQUIREMENTS_PHASE_INDEX } from './PageStepsContent';

import { cloneDeep } from 'lodash';

export interface PageStepsCookieModel {
  activeStep: number;
  typeAnswersCount: number[];
  answers: QuestionCookieModel[][];
}

interface QuestionCookieModel {
  type?: DynamicQuestionType;
  answer: any;
}

export function convertToPageStepsCookie(
  pageSteps: PagesStep[],
  activeStep: number
): PageStepsCookieModel {
  const pageStepsCookie: PageStepsCookieModel = {
    activeStep: activeStep,
    typeAnswersCount: [0, 0, 0],
    answers: []
  };
  pageSteps.forEach((pageStep: PagesStep) => {
    const answersPageStep: QuestionCookieModel[] = [];
    pageStepsCookie.answers.push(answersPageStep);
    pageStep.questions.forEach((question: any) => {
      const qDynamic: DynamicQuestionModel = question as DynamicQuestionModel;

      if (qDynamic.type === 'Feature') {
        const qFeature: FeatureQuestionModel = qDynamic as FeatureQuestionModel;
        answersPageStep.push({
          type: qDynamic.type,
          answer: [qFeature.description, qFeature.priority, qFeature.sprint]
        });
        pageStepsCookie.typeAnswersCount[0]++;
      } else if (qDynamic.type === 'Requirement') {
        const qRequirement: RequirementQuestionModel = qDynamic as RequirementQuestionModel;
        answersPageStep.push({
          type: qDynamic.type,
          answer: [qRequirement.description, qRequirement.feature]
        });
        pageStepsCookie.typeAnswersCount[1]++;
      } else if (qDynamic.type === 'UserStory') {
        const qUserStory: UserStoryQuestionModel = qDynamic as UserStoryQuestionModel;
        answersPageStep.push({
          type: qDynamic.type,
          answer: [
            qUserStory.action,
            qUserStory.actor,
            qUserStory.goal,
            qUserStory.requirement
          ]
        });
        pageStepsCookie.typeAnswersCount[2]++;
      } else {
        answersPageStep.push({ answer: question.answer });
      }
    });
  });
  return pageStepsCookie;
}

function addEmptyDynamicQuestion(
  questions: (QuestionModel | DynamicQuestionModel)[],
  type: DynamicQuestionType,
  count: number,
  start: number = 0
): number {
  if (count < 2) {
    return 0;
  }

  for (let i: number = start; i < questions.length; i++) {
    const qDynamic: DynamicQuestionModel = questions[i] as DynamicQuestionModel;
    if (qDynamic.type === type) {
      const emptyDynamicQuestions: DynamicQuestionModel[] = [];

      for (let j: number = 0; j < count - 1; j++) {
        emptyDynamicQuestions.push(createEmptyDynamicQuestion(type));
      }

      questions.splice(i, 0, ...emptyDynamicQuestions);
      return i + count;
    }
  }

  return 0;
}

export function convertFromPageStepsCookie(
  pageStepsCookie: PageStepsCookieModel
): { activeStepFromCookie: number; pageStepsFromCookie: PagesStep[] } {
  const pageSteps: PagesStep[] = cloneDeep(pageStepsContent);
  let lastAddedIndex: number = 0;
  if (
    pageStepsCookie &&
    pageStepsCookie.typeAnswersCount &&
    pageStepsCookie.typeAnswersCount.length > 0
  ) {
    lastAddedIndex = addEmptyDynamicQuestion(
      pageSteps[REQUIREMENTS_PHASE_INDEX].questions,
      'Feature',
      pageStepsCookie.typeAnswersCount[0]
    );

    lastAddedIndex = addEmptyDynamicQuestion(
      pageSteps[REQUIREMENTS_PHASE_INDEX].questions,
      'Requirement',
      pageStepsCookie.typeAnswersCount[1],
      lastAddedIndex
    );
    addEmptyDynamicQuestion(
      pageSteps[REQUIREMENTS_PHASE_INDEX].questions,
      'UserStory',
      pageStepsCookie.typeAnswersCount[2],
      lastAddedIndex
    );
  }

  for (let i: number = 0; i < pageSteps.length; i++) {
    for (let j: number = 0; j < pageSteps[i].questions.length; j++) {
      const qCookie: QuestionCookieModel = pageStepsCookie.answers[i][j];
      if (qCookie && qCookie.type && qCookie.type === 'Feature') {
        const qFeature: FeatureQuestionModel = pageSteps[i].questions[
          j
        ] as FeatureQuestionModel;
        qFeature.description = qCookie.answer[0];
        qFeature.priority = qCookie.answer[1];
        qFeature.sprint = qCookie.answer[2];
      } else if (qCookie && qCookie.type && qCookie.type === 'Requirement') {
        const qRequirement: RequirementQuestionModel = pageSteps[i].questions[
          j
        ] as RequirementQuestionModel;
        qRequirement.description = qCookie.answer[0];
        qRequirement.feature = qCookie.answer[1];
      } else if (qCookie && qCookie.type && qCookie.type === 'UserStory') {
        const qUserStory: UserStoryQuestionModel = pageSteps[i].questions[
          j
        ] as UserStoryQuestionModel;
        qUserStory.action = qCookie.answer[0];
        qUserStory.actor = qCookie.answer[1];
        qUserStory.goal = qCookie.answer[2];
        qUserStory.requirement = qCookie.answer[3];
      } else {
        if (pageSteps[i].questions[j].answer) {
          pageSteps[i].questions[j].answer =
            pageStepsCookie.answers[i][j].answer;
        }
      }
    }
  }
  return {
    activeStepFromCookie: pageStepsCookie.activeStep,
    pageStepsFromCookie: pageSteps
  };
}
