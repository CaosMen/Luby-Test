import React from 'react';

import { BarTitle, Box, Title } from './styled.js';

class TitleBoxed extends React.Component {
  render() {
    const props = this.props;

    return (
      <React.Fragment>
        <BarTitle>
          <Box color={props.color} />
          <Title>{props.title}</Title>
        </BarTitle>
      </React.Fragment>
    );
  }
}

export default TitleBoxed;