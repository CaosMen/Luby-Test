import React from 'react';

import Loader from '../../components/loadCircle/loadCircle.jsx';
import TopBar from '../../components/topBar/topBar.jsx';
import Follows from '../../components/follows/follows.jsx';
import { GetFollowing } from '../../api/githubApi.js';

class FollowingScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      following: null
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

    GetFollowing(username)
    .then((response) => {
      if(response.status === 200) {
        this.setState({
          following: response.data
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
        {state.following !== null ? (
          <>
            <TopBar title='Seguindo' counter={state.following.length} history={this.props.history} />
            <Follows color='#FFCE00' data={state.following} />
          </>
        ) : (
          <Loader color='#FFCE00' />
        )}
      </React.Fragment>
    );
  }
}

export default FollowingScreen;