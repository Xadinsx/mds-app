// React
import React, { ReactNode, useState } from 'react';

// Router
import { RouteComponentProps } from 'react-router-dom';

// Material UI
import { withStyles } from '@material-ui/core';
import TopBar from '../../components/TopBar/TopBar';
import pageStepsContent from '../../Utils/Content/PageStepsContent';

// Styles
import styles from './Home.styles';
import Content from './Content/Content';
import LeftBar from '../../components/LeftBar/LeftBar';

import { cloneDeep } from 'lodash';

interface Props extends RouteComponentProps {
  classes: any;
  title: string;
  content: ReactNode;
}

interface State {
  activeIcon: string;
}

const Home = ({ classes, title, content }: Props): JSX.Element => {
  const [activeStep, setActiveStep] = useState(0);

  // ESTADO NA MEMORIA É O pageStepsContentState
  // PODEM USAR ESTE ESTADO PARA GUARDAR EM COOKIES OU NO FICHEIRO CSV
  const [pageStepsContentState, setPagesStepContent] = useState(
    pageStepsContent
  );

  const [hasBeenChecked, setHasBeenChecked] = useState(false);

  const handleClickStep = (clickedStep: number): void => {
    let validation = true;
    activeStep >= 0 &&
      activeStep <= pageStepsContentState.length - 1 &&
      pageStepsContentState[activeStep].questions.forEach(question => {
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
  };

  const handleTextChange = (index: number, value: string): void => {
    const pageStepsContentCopy = cloneDeep(pageStepsContentState);

    pageStepsContentCopy[activeStep].questions[index].answer = value;

    setPagesStepContent(pageStepsContentCopy);
  };

  const progressStep = (activeStep / pageStepsContent.length) * 100;

  return (
    <div className={classes.root}>
      <TopBar progress={progressStep} />
      <div className={classes.contentContainer}>
        {
          //@ts-ignore
          <LeftBar activeStep={activeStep} handleClickStep={handleClickStep} />
        }
        <Content
          handleTextChange={handleTextChange}
          pageStepsContent={pageStepsContentState}
          setActiveStep={handleClickStep}
          activeStep={activeStep}
          hasBeenChecked={hasBeenChecked}
        />
      </div>
    </div>
  );
};

export default withStyles(styles)(Home);
