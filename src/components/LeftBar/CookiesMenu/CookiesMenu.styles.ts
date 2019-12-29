import { Constants } from '../../../Theme';

const styles = (): any => ({
  openMenuButtonContainer: {
    width: '100%',
    display: 'flex'
  },
  openMenuButton: {
    flexGrow: 1,
    "& span": {
      margin: "0 5px"
    }
  },
  modal: {
    position: 'absolute',
    width: 400,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: Constants.colors.DropdownBackground,
    border: '2px solid #444',
    borderRadius: "4px",
    boxShadow: "0px 3px 5px -1px rgba(0,0,0,0.2), 0px 5px 8px 0px rgba(0,0,0,0.14), 0px 1px 14px 0px rgba(0,0,0,0.12)",
    padding: "16px 32px 24px",
    "&:focus": {
      outline: "none"
    }
  },
  modalButtons: {
    marginTop: "30px",
    width: "100%",
    textAlign: "right",
    "& button": {
      margin: "5px"
    }
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
