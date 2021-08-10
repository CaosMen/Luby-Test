import React from 'react';

import { LinkTo, Avatar, Info, BarInfo, BarBlock, BlockNumber, BlockText } from './styled.js';

import TitleBoxed from './titleBoxed.jsx';
import TopBarUser from './topBarUser.jsx';
import Loader from '../../components/loadCircle/loadCircle.jsx';

import { UserContext } from '../../contexts/UserContext.js';
import { GetUser } from '../../api/githubApi.js';

class UserScreen extends React.Component {
  static contextType = UserContext;

  constructor(props) {
    super(props);
    this.state = {
      user: null,
      mainUser: false
    };
  }

  componentDidUpdate(prevProps) {
    if(prevProps !== this.props) {
      this.mountView();
    }
  }

  componentDidMount() {
    this.mountView();
  }

  options(user) {
    return [
      {path: 'followers', name: 'Seguidores', value: user.followers},
      {path: 'following', name: 'Seguindo', value: user.following},
      {path: 'repository', name: 'Repos', value: user.public_repos}
    ];
  }

  mountView() {
    let usernameContext = this.context.user.login;
    let username = this.props.match.params.id;
    
    if(usernameContext.toLowerCase() === username.toLowerCase()) {
      this.setState({
        user: this.context.user,
        mainUser: true
      });
    } else {
      GetUser(username)
        .then((response) => {
          if(response.status === 200) {
            this.setState({
              user: response.data,
              mainUser: false
            });
          } else {
            this.props.history.push('/');
          }
        })
    }
  }

  render() {
    const state = this.state;

    return (
      <React.Fragment>
      {state.user !== null ? (
        <>
          <TopBarUser mainUser={state.mainUser} user={state.user} history={this.props.history} />
          <Avatar src={state.user.avatar_url} alt='User profile picture' />
          <TitleBoxed color='#FFCE00' title={state.user.name ? state.user.name : state.user.login} />
          {state.user.email && (<Info>{state.user.email}</Info>)}
          {state.user.location && (<Info>{state.user.location}</Info>)}
          <BarInfo>
            {this.options(state.user).map((element) => 
              <LinkTo to={'/' + element.path + '/' + state.user.login}>
                <BarBlock>
                  <BlockNumber>{element.value}</BlockNumber>
                  <BlockText>{element.name}</BlockText>
                </BarBlock>
              </LinkTo>
            )}
          </BarInfo>
          {state.user.bio && (
            <>
              <TitleBoxed color='#FFCE00' title='BIO' />
              <Info>{state.user.bio}</Info>
            </>
          )}
        </>
      ) : (
        <Loader color='#FFCE00' />
      )}
      </React.Fragment>
    );
  }
}

export default UserScreen;