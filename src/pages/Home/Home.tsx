// React
import React, { ReactNode, useState } from 'react';
import { ReactCookieProps } from 'react-cookie';

// Router
import { RouteComponentProps } from 'react-router-dom';

// Material UI
import {
  withStyles
} from '@material-ui/core';
import TopBar from '../../components/TopBar/TopBar';
import { PagesStep } from '../../models/ui/Steps';
import pageStepsContent from '../../Utils/Content/PageStepsContent';
import { convertFromPageStepsCookie } from '../../Utils/Content/PageStepsCookie.model';

// Styles
import styles from './Home.styles';
import Content from './Content/Content';
import LeftBar from '../../components/LeftBar/LeftBar';

import { cloneDeep } from 'lodash';

interface Props extends RouteComponentProps {
  classes: any;
  title: string;
  content: ReactNode;
  cookies: ReactCookieProps;
}

interface State {
  activeIcon: string;
}

const Home = ({ classes, cookies }: Props): JSX.Element => {
  // ESTADO NA MEMORIA É O pageStepsContentState
  // PODEM USAR ESTE ESTADO PARA GUARDAR EM COOKIES OU NO FICHEIRO CSV
  let activeStepFromCookie: number;
  let pageStepsFromCookie: PagesStep[];

  const pageStepsCookieAppState: any = cookies.cookies ? cookies.cookies.get('app-state') : null;

  if (pageStepsCookieAppState && pageStepsCookieAppState.state) {
    const cookieStateDecoded: string =
      new Buffer(pageStepsCookieAppState.state, 'base64').toString('ascii');
    const dataConvertedFromCookie: any = convertFromPageStepsCookie(JSON.parse(cookieStateDecoded));
    activeStepFromCookie = dataConvertedFromCookie.activeStepFromCookie;
    pageStepsFromCookie = dataConvertedFromCookie.pageStepsFromCookie;
  } else {
    activeStepFromCookie = 0;
    pageStepsFromCookie = cloneDeep(pageStepsContent);
  }


  const [activeStep, setActiveStep] = useState(activeStepFromCookie);
  const [pageStepsContentState, setPagesStepContent] = useState(pageStepsFromCookie);
  const [progressStep, setProgressStep] = useState(0);
  let maxActiveStep: number = activeStep;

  const updateProgressStep = () => {
    const eachPhaseProgress: number = 100 / pageStepsContentState.length;
    let progress: number = 0;

    for (let i: number = 0; i < pageStepsContentState.length; i++) {
      const activeStepRequiredQuestions: any[] = pageStepsContentState[i].questions
        .filter((question: any) => question.required);
      const eachQuestionProgress = eachPhaseProgress / activeStepRequiredQuestions.length;

      if (!activeStepRequiredQuestions || !activeStepRequiredQuestions.length) {
        progress += maxActiveStep >= i ? eachPhaseProgress : 0;
        continue;
      }

      progress += eachQuestionProgress * activeStepRequiredQuestions
        .filter((question: any) => !!question.answer).length;
    }

    const progressRound: string = progress.toPrecision(2);
    setProgressStep(+progressRound);
  };

  const [hasBeenChecked, setHasBeenChecked] = useState(false);

  const handleClickStep = (clickedStep: number): boolean => {
    let validation = true;
    activeStep >= 0 &&
    activeStep <= pageStepsContentState.length - 1 &&
    pageStepsContentState[activeStep].questions.forEach((question: any) => {
      if (question.required) {
        if (question.answer) {
        } else {
          validation = false;
        }
      } else {
      }
    });
    if (clickedStep < activeStep) {
      validation = true;
    }

    if (!validation) {
      setHasBeenChecked(true);
    }

    if (validation) {
      setHasBeenChecked(false);
      setActiveStep(clickedStep);
    }

    maxActiveStep = activeStep > maxActiveStep ? activeStep : maxActiveStep;
    return validation;
  };

  const handleTextChange = (index: number, value: string): void => {
    const pageStepsContentCopy = cloneDeep(pageStepsContentState);

    pageStepsContentCopy[activeStep].questions[index].answer = value;

    setPagesStepContent(pageStepsContentCopy);
  };

  const resetPagesStepContent = (): void => {
    setPagesStepContent(cloneDeep(pageStepsContent));
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <TopBar progress={progressStep}/>
      <div className={classes.contentContainer}>
        {
          //@ts-ignore
          <LeftBar
            activeStep={activeStep}
            handleClickStep={handleClickStep}
            cookies={cookies}
            pageStepsContentState={pageStepsContentState}
            resetPagesStepContent={resetPagesStepContent}
          />
        }
        <Content
          handleTextChange={handleTextChange}
          pageStepsContent={pageStepsContentState}
          setActiveStep={handleClickStep}
          cookies={cookies.cookies}
          activeStep={activeStep}
          hasBeenChecked={hasBeenChecked}
          updateProgressStep={updateProgressStep}
        />
      </div>
    </div>
  );
};

export default withStyles(styles)(Home);
