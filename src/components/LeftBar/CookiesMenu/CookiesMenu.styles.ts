import { Constants } from '../../../Theme';

const styles = (): any => ({
  openMenuButtonContainer: {
    width: '100%',
    display: 'flex'
  },
  openMenuButton: {
    flexGrow: 1
  },
  listContainer: {
    '& .MuiPaper-root.MuiMenu-paper.MuiPaper-elevation0.MuiPopover-paper.MuiPaper-rounded': {
      borderColor: Constants.colors.BattleshipGrey,
      borderWidth: '1px',
      boxShadow: '0 0 4px #888'
    }
  },
  listItemWrapper: {
    display: 'flex',
    alignItems: 'center',
    minWidth: '200px',
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: Constants.colors.IconHover
    },
    '&:focus': {
      outline: 'none'
    }
  },
  listItemIcon: {
    margin: '0 10px',
    minWidth: '0',
    width: 'auto'
  }
});

export default styles;
