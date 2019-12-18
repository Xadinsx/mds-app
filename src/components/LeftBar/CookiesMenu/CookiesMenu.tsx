import React, { Component } from 'react';
import { cloneDeep } from 'lodash';

import { Button, ListItemIcon, ListItemText, Menu, withStyles } from '@material-ui/core';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import SaveIcon from '@material-ui/icons/Save';

import { PagesStep } from '../../../models/ui/Steps';
import pageStepsContent from '../../../Utils/Content/PageStepsContent';
import { convertToPageStepsCookie } from '../../../Utils/Content/PageStepsCookie.model';
import styles from './CookiesMenu.styles';

interface CookiesMenuProps {
  classes: any;
  pageStepsContentState: PagesStep[];
  resetPagesStepContent: () => void;
  activeStep: number;
}

class CookiesMenu extends Component<any & CookiesMenuProps> {
  state = {
    anchorEl: null
  };

  setAnchorEl = (el: any) => this.setState({ ...this.state, anchorEl: el });

  handleClick = (event: any) => {
    this.setAnchorEl(event.currentTarget);
  };

  handleClose = () => {
    this.setAnchorEl(null);
  };

  handleSaveToCookies = () => {
    if (this.props.cookies) {
      const encodedCookie: string = new Buffer(JSON.stringify(convertToPageStepsCookie(this.props.pageStepsContentState, this.props.activeStep))).toString('base64');
      this.props.cookies.set('app-state', {state: encodedCookie});
    }
    this.handleClose();
  };

  handleClearCookiesAndResetState = () => {
    if (this.props.cookies) {
      this.props.cookies.remove('app-state');
      this.props.resetPagesStepContent();
    }
    this.handleClose();
  };

  render() {
    const { anchorEl }: any = this.state;
    const { classes } = this.props;

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
        onClose={this.handleClose}
        className={classes.listContainer}
      >
        <div className={classes.listItemWrapper} onClick={this.handleSaveToCookies}>
          <ListItemIcon className={classes.listItemIcon}>
            <SaveIcon fontSize="small"/>
          </ListItemIcon>
          <ListItemText>Guardar Estado</ListItemText>
        </div>
        <div className={classes.listItemWrapper} onClick={this.handleClearCookiesAndResetState}>
          <ListItemIcon className={classes.listItemIcon}>
            <RotateLeftIcon fontSize="small"/>
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
          onClick={this.handleClick}
          className={classes.openMenuButton}
        >
          Menu
        </Button>
        {MenuPopup}
      </div>
    );
  }
}

export default withStyles(styles)(CookiesMenu);
