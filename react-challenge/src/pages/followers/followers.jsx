import React from 'react';

import Loader from '../../components/loadCircle/loadCircle.jsx';
import TopBar from '../../components/topBar/topBar.jsx';
import Follows from '../../components/follows/follows.jsx';
import { GetFollowers } from '../../api/githubApi.js';

class FollowersScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      followers: null
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

  mountView() {
    let username = this.props.match.params.id;

    GetFollowers(username)
    .then((response) => {
      if(response.status === 200) {
        this.setState({
          followers: response.data
        });
      } else {
        this.props.history.push('/');
      }
    })
  }

  render() {
    const state = this.state;

    return (
      <React.Fragment>
        {state.followers !== null ? (
          <>
            <TopBar title='Seguidores' counter={state.followers.length} history={this.props.history} />
            <Follows color='#FFCE00' data={state.followers} />
          </>
        ) : (
          <Loader color='#FFCE00' />
        )}
      </React.Fragment>
    );
  }
}

export default FollowersScreen;