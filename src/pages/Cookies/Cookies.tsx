import React, { Component, FormEvent } from 'react';

import { withStyles } from '@material-ui/core';
import { ReactCookieProps } from 'react-cookie';

// Material UI
import styles from './Cookies.styles';

class Cookies extends Component<ReactCookieProps & {classes: any}, { form: any }> {
  state: { form: any } = {
    form: {
      key: '',
      value: ''
    }
  };

  get form(): any {
    return this.state.form;
  }

  set form(form: any) {
    this.setState({
      ...this.state,
      form
    });
  }

  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> {
    const cookiesContent: any[] = this.getAllCookiesContent();
    return (
      <div>
        <label htmlFor={"key"}>Key:</label>
        <input type={"text"} id={"key"} value={this.form.key} onChange={this.handleInput} className={this.props.classes.input}/>
        <label htmlFor={"value"}>Value:</label>
        <input type={"text"} id={"value"} value={this.form.value} onChange={this.handleInput} className={this.props.classes.input}/>
        <button onClick={this.handleAddCookie}>Add Cookie</button>
        <button onClick={this.handleClearCookies}>Clear Cookies</button>
        <button onClick={this.handleLoadCookie}>Load Cookie</button>
        <ul>
          {cookiesContent}
        </ul>
      </div>
    );
  }

  getAllCookiesContent(): any[] {
    const cookiesContent: any[] = [];
    const cookies: any = this.props.cookies;

    if (!cookies) {
      return cookiesContent;
    }

    for (const cookieKey in cookies.getAll()) {
      cookiesContent.push(<li key={cookieKey}>{cookieKey}: {cookies.get(cookieKey)}</li>)
    }

    return cookiesContent;
  }

  handleInput = (e: FormEvent<HTMLInputElement>): void => {
    this.form = {
      ...this.form,
      [e.currentTarget.id]: e.currentTarget.value
    };
  };

  handleAddCookie = (): void => {
    if (this.props.cookies) {
      this.props.cookies.set(this.form.key, this.form.value);
    }
  };

  handleClearCookies = (): void => {
    if (this.props.cookies) {
      for (const cookieKey in this.props.cookies.getAll()) {
        this.props.cookies.remove(cookieKey);
      }
    }
  };

  handleLoadCookie = () => {
    if (this.props.cookies) {
      this.form = {
        ...this.form,
        value: this.props.cookies.get(this.form.key)
      };
    }
  }
}

export default withStyles(styles)(Cookies);
