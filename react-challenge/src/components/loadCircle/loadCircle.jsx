import React from 'react';

import { LoaderContainer, LoaderCircle } from './styled.js';

class Loader extends React.Component {
  render() {
    return (
      <React.Fragment>
        <LoaderContainer>
          <LoaderCircle color={this.props.color} ></LoaderCircle>
        </LoaderContainer>
      </React.Fragment>
    );
  }
}

export default Loader;