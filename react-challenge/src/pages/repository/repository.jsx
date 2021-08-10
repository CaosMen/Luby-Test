import React from 'react';

import { StarIcon, UnlockIcon, LockIcon } from '@primer/octicons-react';

import {
  Repo, Title, BarTitle, BoxOrange, Info,
  RepoLowerBar, StartDiv, StartText
} from './styled.js';

import TopBar from '../../components/topBar/topBar.jsx';
import Loader from '../../components/loadCircle/loadCircle.jsx';
import { GetRepository } from '../../api/githubApi.js';

class RepositoryScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repositories: null
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

    GetRepository(username)
    .then((response) => {
      if(response.status === 200) {
        this.setState({
          repositories: response.data
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
        {state.repositories !== null ? (
          <>
            <TopBar title='Repositórios' counter={state.repositories.length} history={this.props.history} />
            {state.repositories.map((repo) => 
              <Repo key={repo.id}>
                <BarTitle>
                  <BoxOrange />
                  <Title>{repo.name}</Title>
                </BarTitle>
                {repo.description && <Info>{repo.description}</Info>}
                <RepoLowerBar>
                  <StartDiv >
                    <StarIcon size={20} fill='#FFCE00' />
                    <StartText>{repo.stargazers_count}</StartText>
                  </StartDiv>
                  {!repo.private ? (<UnlockIcon size={20} fill='#63BF1F' />) : (<LockIcon size={20} fill='#CC042A' />)}
                </RepoLowerBar>
              </Repo>
            )}
          </>
        ) : (
          <Loader color='#FFCE00' />
        )}
      </React.Fragment>
    );
  }
}

export default RepositoryScreen;