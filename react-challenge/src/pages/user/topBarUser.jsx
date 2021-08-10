import React from 'react';

import { TopBar, Username, SignText, SignOut, SignIn, GoBackIcon } from './styled.js';

import { UserContext } from '../../contexts/UserContext.js';

class TopBarUser extends React.Component {
  static contextType = UserContext;

  homePage() {
    this.props.history.push('/');
  }

  save() {
    const props = this.props;

    this.context.setUser(props.user);
    this.homePage();
  }

  logout() {
    this.context.clearUser();
    this.homePage();
  }

  render() {
    const props = this.props;

    return (
      <React.Fragment>
        <TopBar>
          {props.mainUser ? (
            <>
              <Username>#{props.user.login}</Username>
              <SignText onClick={() => this.logout()} >Sair<SignOut fill='#D03434' /></SignText>
            </>
          ) : (
            <>
              <div onClick={() => this.homePage()}><GoBackIcon size='24' fill='white' /></div>
              <SignText onClick={() => this.save()} >Salvar<SignIn fill='#5CBC29' /></SignText>
            </>
          )}
        </TopBar>
      </React.Fragment>
    );
  }
}

export default TopBarUser;