import { Constants } from '../../Theme';

const styles = (): any => ({
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden'
  },
  leftBarContainer: {
    flexDirection: 'row',
    width: '100%',
    height: '100%',
    display: 'flex'
  },
  contentWrapper: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    backgroundColor: Constants.colors.WarmBlue
  },
  content: {
    height: 'calc(100vh - 100px)',
    backgroundColor: Constants.colors.White,
    padding: '20px',
    paddingBottom: '0px',
    boxSizing: 'border-box',
    overflow: 'scroll',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  topBar: {
    backgroundColor: Constants.colors.WarmBlue,
    width: '100%',
    boxShadow: '0 10px 30px 0 rgba(23, 78, 154, 0.1)',
    display: 'flex',
    alignItems: 'center',
    padding: 20,
    borderBottom: `1px solid ${Constants.colors.BattleshipGrey}`,
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  topBarText: {
    fontSize: 20,
    color: Constants.colors.White
  },
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
  actionButtons: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    margin: '10px 40px'
  },
  buttonDivider: {
    margin: '0px 20px'
  },
  questionInput: {
    marginTop: 10,
    width: '70%',
    borderRadius: '20px'
  },
  margin: {
    margin: 5,
    width: '300px'
  },
  progressContainer: {
    paddingRight: 60,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  progressText: {
    fontSize: 20,
    color: Constants.colors.White,
    paddingRight: 10
  }
});

export default styles;
