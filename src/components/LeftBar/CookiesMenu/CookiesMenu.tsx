import React from 'react';

import { Button, Modal, withStyles } from '@material-ui/core';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';

import styles from './CookiesMenu.styles';

interface CookiesMenuProps {
  classes: any;
  resetPagesStepContent: () => void;
}

const CookiesMenu = (props: any & CookiesMenuProps) => {
  const { classes } = props;
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOk = () => {
    if (props.cookies) {
      props.cookies.remove('app-state');
      props.resetPagesStepContent();
    }
    setOpen(false);
  };

  return (
    <div>
      <div className={classes.openMenuButtonContainer}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleOpen}
          className={classes.openMenuButton}
        >
          <RotateLeftIcon fontSize="small"/><span>Recomeçar</span>
        </Button>
      </div>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div className={classes.modal}>
          <h2 id="simple-modal-title">Recomeçar Progresso</h2>
          <p id="simple-modal-description">
            Tem a certeza que pretende continuar? O seu progresso atual será perdido.
          </p>
          <div className={classes.modalButtons}>
            <Button color="primary" onClick={handleClose}>Cancelar</Button>
            <Button color="primary" onClick={handleOk}>Ok</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default withStyles(styles)(CookiesMenu);
