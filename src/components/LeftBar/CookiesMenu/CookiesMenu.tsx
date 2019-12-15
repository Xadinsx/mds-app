import React from 'react';

import { Button, ListItemIcon, ListItemText, Menu, withStyles } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';

import styles from './CookiesMenu.styles';

interface CookiesMenu {
  classes: any;

  [key: string]: any;
}

const CookiesMenu = ({ classes }: CookiesMenu) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const MenuPopup = (
    <Menu
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: 'center',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      id="customized-menu"
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={handleClose}
      className={classes.listContainer}
    >
      <div className={classes.listItemWrapper}>
        <ListItemIcon className={classes.listItemIcon}>
          <SaveIcon fontSize="small"/>
        </ListItemIcon>
        <ListItemText>Guardar Estado</ListItemText>
      </div>
      <div className={classes.listItemWrapper}>
        <ListItemIcon className={classes.listItemIcon}>
          <SaveIcon fontSize="small"/>
        </ListItemIcon>
        <ListItemText>Recomeçar</ListItemText>
      </div>
    </Menu>
  );

  return (
    <div className={classes.openMenuButtonContainer}>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        onClick={handleClick}
        className={classes.openMenuButton}
      >
        Open Menu
      </Button>
      {MenuPopup}
    </div>
  );
};

export default withStyles(styles)(CookiesMenu);
