import { Constants } from '../../Theme';
import { width } from '@material-ui/system';

const styles = (): any => ({
  leftBar: {
    backgroundColor: Constants.colors.WarmBlue,
    // calc com px dos paddings tomados
    height: 'calc(100vh - 111px)',
    padding: 20,
    width: 200,
    boxShadow: '0 10px 30px 0 rgba(23, 78, 154, 0.1)'
  },
  titleText: {
    fontSize: 25,
    color: Constants.colors.WarmBlue
  },
  subtitleText: {
    fontSize: 20,
    color: Constants.colors.WarmBlue
  },
  stepsContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  stepNumberText: {
    color: Constants.colors.LightBlue,
    fontSize: 15,
    textAlign: 'center'
  },
  stepNumberTextWhite: {
    color: Constants.colors.White,
    fontSize: 15,
    textAlign: 'center'
  },
  separatorContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  stepSeparator: {
    height: 40,
    backgroundColor: Constants.colors.White,
    width: '2px',
    alignSelf: 'center'
  },
  gridContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  numberContainer: {
    height: 30,
    width: 30,
    backgroundColor: Constants.colors.White,
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textLabelContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default styles;
