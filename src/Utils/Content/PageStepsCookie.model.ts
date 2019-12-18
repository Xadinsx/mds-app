import { PagesStep } from '../../models/ui/Steps';
import pageStepsContent from './PageStepsContent';

import { cloneDeep } from 'lodash';

export interface PageStepsCookieModel {
  activeStep: number;
  answers: string[][];
}

export function convertToPageStepsCookie(pageSteps: PagesStep[], activeStep: number): PageStepsCookieModel {
  const pageStepsCookie: PageStepsCookieModel = {
    activeStep: activeStep,
    answers: []
  };
  pageSteps.forEach((pageStep: PagesStep) => {
    const answersPageStep: string[] = [];
    pageStepsCookie.answers.push(answersPageStep);
    pageStep.questions.forEach((question: any) => {
      answersPageStep.push(question.answer);
    })
  });
  return pageStepsCookie;
}

export function convertFromPageStepsCookie(pageStepsCookie: PageStepsCookieModel): { activeStepFromCookie: number, pageStepsFromCookie: PagesStep[] } {
  const pageSteps: PagesStep[] = cloneDeep(pageStepsContent);
  for (let i: number = 0; i < pageSteps.length; i++) {
    for (let j: number = 0; j < pageSteps[i].questions.length; j++) {
      pageSteps[i].questions[j].answer = pageStepsCookie.answers[i][j];
    }
  }
  return {
    activeStepFromCookie: pageStepsCookie.activeStep,
    pageStepsFromCookie: pageSteps
  };
}
