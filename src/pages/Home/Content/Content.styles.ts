import { Constants } from '../../../Theme';

const styles: () => any = (): any => {
  return {
    contentWrapper: {
      height: '100%',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      backgroundColor: Constants.colors.WarmBlue
    },
    content: {
      height: '100%',
      backgroundColor: Constants.colors.White,
      padding: '20px',
      paddingBottom: '0px',
      boxSizing: 'border-box',
      overflowX: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
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
    }
  };
};

export default styles;
