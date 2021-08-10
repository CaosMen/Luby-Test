import React from 'react';

import { Bar, GoBackIcon, TextBar } from './styled.js';

class TopBar extends React.Component {
  profileGoBack(history) {
    let pathname = history.location.pathname;
    let path = pathname.split('/')[1];

    let pathnameUser = pathname.replace(path, 'user');

    this.props.history.push(pathnameUser);
  }

  render() {
    const title = this.props.title;
    const counter = this.props.counter;

    const history = this.props.history;

    return (
      <React.Fragment>
        <Bar>
          <div onClick={() => this.profileGoBack(history)}>
            <GoBackIcon size='24' fill='white' />
          </div>
          <TextBar>{counter + ' ' + title}</TextBar>
        </Bar>
      </React.Fragment>
    );
  }
}

export default TopBar;