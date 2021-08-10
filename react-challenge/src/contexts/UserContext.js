import React, { createContext } from 'react';

export const UserContext = createContext();

class UserContextProvider extends React.Component {
  state = {
    auth: JSON.parse(localStorage.getItem('auth')),
    user: JSON.parse(localStorage.getItem('user'))
  }

  setUser = (user) => {
    let userObject = {};

    let keysNames = ['login', 'name', 'email', 'location', 'company', 'bio', 'avatar_url', 'followers_url', 'following_url', 'organizations_url', 'starred_url', 'public_repos', 'public_gists', 'followers', 'following'];

    keysNames.forEach((el) => userObject[el] = user[el]);

    this.setState({ 
      auth: true,
      user: userObject
    });
  }

  clearUser = () => {
    this.setState({ 
      auth: false,
      user: null
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.user !== prevState.user) {
      localStorage.setItem('auth', JSON.stringify(this.state.auth))
      localStorage.setItem('user', JSON.stringify(this.state.user))
    }
  }

  render() {
    return(
      <UserContext.Provider value={{ ...this.state, setUser: this.setUser, clearUser: this.clearUser }}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export default UserContextProvider;