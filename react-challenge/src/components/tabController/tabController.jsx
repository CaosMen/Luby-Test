import React from 'react';

import { HomeIcon, PeopleIcon, MarkGithubIcon } from '@primer/octicons-react';

import { 
  Footter, Spacer, LinkTo,
  Option, OptionIcon, OptionName 
} from './styled.js';

import { UserContext } from '../../contexts/UserContext.js';

class TabController extends React.Component {
  static contextType = UserContext;

  constructor(props) {
    super(props);
    this.state = {
      options: [
        {selected: true, link: 'user', name: 'Home', icon: <HomeIcon />}, 
        {selected: false, link: 'repository', name: 'Repos', icon: <MarkGithubIcon />},
        {selected: false, link: 'followers', name: 'Seguidores', icon: <PeopleIcon />},
        {selected: false, link: 'following', name: 'Seguindo', icon: <PeopleIcon />}
      ]
    };

    this.props.history.listen((location, action) => {
      let url = (location.pathname).split('/');
      let pathname = url[1];

      let usernameContext = this.context.user.login;
      let usernameRoute = url[2];

      if(usernameContext === usernameRoute) {
        if(this._ismounted) {
          this.routeChange(pathname);
        }
      }
    });
  }

  componentDidMount() {
    this._ismounted = true;

    this.routeChange();
  }

  componentWillUnmount() {
    this._ismounted = false;
  }

  routeChange(pathname) {
    let pathnameCurrent = (this.props.match.path).split('/')[1];
    pathname = (pathname != null) ? pathname : pathnameCurrent;
    
    let options = this.state.options;

    this.changeOption(options.findIndex((element) => element.link === pathname));
  }

  changeOption(index) {
    let options = this.state.options;

    for(let i = 0; i < options.length; i++) {
      options[i].selected = (i === index) ? true : false;
    }

    this.setState({
      options: options
    });
  }

  render() {
    const user = this.context.user;
    const options = this.state.options;

    const {component} = this.props;

    return (
      <React.Fragment>
        {component(this.props)}
        <Spacer />
        <Footter>
          {options.map((element, i) => 
            <LinkTo to={'/' + element.link + '/' + user.login} key={element.name}>
              <Option active={element.selected}>
                <OptionIcon>
                  {element.icon}
                </OptionIcon>
                <OptionName>
                  {element.name}
                </OptionName>
              </Option>
            </LinkTo>
          )}
        </Footter>
      </React.Fragment>
    );
  }
}

export default TabController;