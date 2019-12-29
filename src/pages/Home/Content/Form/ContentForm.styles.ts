import { Constants } from '../../../../Theme';

const styles: () => any = (): any => {
  return {
    questionContainer: {
      flexBasis: '100%',
      maxWidth: '100%',
      paddingBottom: '12px',
      position: "relative",
      "& hr": {
        margin: "30px 0",
        color: Constants.colors.DropdownLine
      }
    },
    questionInput: {
      marginTop: 10,
      width: '70%',
      borderRadius: '20px'
    },
    requiredLabelSpan: {
      color: Constants.colors.PastelRed,
      marginLeft: '2px'
    },
    phaseFourQuestionTitle: {
      color: Constants.colors.WarmBlue
    },
    singleLineFormGroup: {
      display: 'flex',
      alignItems: 'flex-end',
      paddingBottom: '12px',
      position: "relative",
      "& p": {
        marginRight: "10px"
      }
    },
    addQuestionButtonContainer: {
      marginTop: "30px",
      textAlign: "center"
    },
    actionQuestionButton: {
      cursor: 'pointer',
      fontSize: "32px",
      "&:hover": {
        opacity: 0.6
      }
    },
    removeQuestionButtonContainer: {
      position: "absolute",
      top: "10px",
      right: "10px"
    },
    errorRadio: {
      color: 'red'
    }
  };
};

export default styles;
