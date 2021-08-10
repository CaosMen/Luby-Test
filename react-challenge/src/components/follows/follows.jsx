import React from 'react';

import { ArrowRightIcon } from '@primer/octicons-react';

import { User, BarTitle, Avatar, Box, Name, LinkTo } from './styled.js';

class Follows extends React.Component {
  render() {
    const users = this.props.data;
    return (
      <React.Fragment>
        {users.map((user) => 
          <LinkTo to={'/user/' + user.login} key={user.login}>
            <User>
              <BarTitle>
                <Box color={this.props.color} />
                <Avatar src={user.avatar_url} alt={'User: ' + user.login} />
                <Name>#{user.login}</Name>
              </BarTitle>
              <ArrowRightIcon fill='White' size={30} />
            </User>
          </LinkTo>
        )}
      </React.Fragment>
    );
  }
}

export default Follows;