import { Constants } from '../../Theme';

const styles = (): any => ({
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
  },
  margin: {
    margin: 5,
    width: '300px'
  }
});

export default styles;
