import React from 'react';

import Swal from 'sweetalert2';
import { Redirect } from 'react-router-dom';
import { ChevronRightIcon } from '@primer/octicons-react';

import { 
  Main, GitHubLogo, Input, Button,
  Form, InputArea, ErrorArea, 
} from './styled.js';

import { UserContext } from '../../contexts/UserContext.js';
import { GetUser } from '../../api/githubApi.js';

class HomeScreen extends React.Component {
  static contextType = UserContext;

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      error: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      username: event.target.value,
      error: false
    });
  }

  handleSubmit(event) {
    let username = this.state.username;
    
    event.preventDefault();

    if(username.length > 0) {
      GetUser(username)
        .then((response) => {
          if(response.status === 200) {
            this.context.setUser(response.data);
            this.props.history.push('/user/' + response.data.login);
          } else {
            Swal.fire({
              title: 'Erro!',
              text: 'Usuário não existe!',
              icon: 'error'
            });
          }
        })
    } else {
      this.setState({
        error: true
      });
    }
  }

  render() {
    const auth = this.context.auth;
    const state = this.state;

    return (
      <React.Fragment>
        {!auth ? (
          <Main>
            <GitHubLogo fill='#FFCE00' />
            <Form onSubmit={this.handleSubmit}>
              <InputArea>
                <ErrorArea out={state.error}>Campo Obrigatório</ErrorArea>
                <Input type='text' spellCheck='false' value={state.username} 
                  onChange={this.handleChange} placeholder='Usuário' />
              </InputArea>
              <Button color='#FFCE00' type='submit'>ENTER<ChevronRightIcon /></Button>
            </Form>
          </Main>
        ) : (
          <Redirect to={'/user/' + this.context.user.login} />
        )}
      </React.Fragment>
    );
  }
}

export default HomeScreen;