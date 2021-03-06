import { Constants } from '../../Theme';

const styles = (): any => ({
  leftBar: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    backgroundColor: Constants.colors.WarmBlue,
    flexGrow: 1,
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
    alignItems: 'center',
    '&:hover': {
      cursor: 'pointer'
    }
  },
  blocked: {
    cursor: 'not-allowed',
    opacity: 0.2,
    '&:hover': {
      cursor: 'not-allowed'
    }
  },
  textLabelContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  hoverStep: {
    '&:hover': {
      boxShadow: '0 0 20px 0 rgba(23, 78, 154, 0.2)',
      transform: 'scale(1.5)'
    }
  }
});

export default styles;
