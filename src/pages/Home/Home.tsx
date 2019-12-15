// React
import React, { ReactNode, useState } from 'react';

// Router
import { RouteComponentProps } from 'react-router-dom';

// Material UI
import {
  withStyles
} from '@material-ui/core';
import TopBar from '../../components/TopBar/TopBar';
import pageStepsContent from '../../Utils/Content/PageStepsContent';

// Styles
import styles from './Home.styles';
import Content from './Content/Content';
import LeftBar from '../../components/LeftBar/LeftBar';

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

  const handleClickStep = (clickedStep: number): void => {
    if (true) {
      setActiveStep(clickedStep);
    }
  };

  const progressStep = (activeStep / pageStepsContent.length) * 100;

  return (
    <div className={classes.root}>
      <TopBar progress={progressStep}/>
      <div className={classes.contentContainer}>
        {
          //@ts-ignore
          <LeftBar
            activeStep={activeStep}
            handleClickStep={handleClickStep}
          />
        }
        <Content
          setActiveStep={setActiveStep}
          activeStep={activeStep}
        />
      </div>
    </div>
  );
};

export default withStyles(styles)(Home);
