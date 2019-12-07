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
    boxSizing: 'border-box',
    overflow: 'hidden'
  },
  topBar: {
    backgroundColor: Constants.colors.WarmBlue,
    width: '100%',
    boxShadow: '0 10px 30px 0 rgba(23, 78, 154, 0.1)',
    display: 'flex',
    alignItems: 'center',
    padding: 20,
    borderBottom: `1px solid ${Constants.colors.BattleshipGrey}`
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
  }
});

export default styles;
