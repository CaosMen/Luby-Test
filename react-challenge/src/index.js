import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { GlobalStyle } from './styled.js';

import HomeScreen from './pages/home/home.jsx';
import TabController from './components/tabController/tabController.jsx';
import UserScreen from './pages/user/user.jsx';
import RepositoryScreen from './pages/repository/repository.jsx';
import FollowersScreen from './pages/followers/followers.jsx';
import FollowingScreen from './pages/following/following.jsx';

import { RequireAuth } from './Auth.js';

import reportWebVitals from './reportWebVitals';
import UserContextProvider from './contexts/UserContext.js';

ReactDOM.render(
  <UserContextProvider>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' render={(props) => <HomeScreen {...props} />}/>
        <RequireAuth>
          <Route path='/user/:id' render={(props) => <TabController {...props} component={(props) => <UserScreen {...props} />}/>}/>
          <Route path='/repository/:id' render={(props) => <TabController {...props} component={(props) => <RepositoryScreen {...props} />}/>}/>
          <Route path='/followers/:id' render={(props) => <TabController {...props} component={(props) => <FollowersScreen {...props} />}/>}/>
          <Route path='/following/:id' render={(props) => <TabController {...props} component={(props) => <FollowingScreen {...props} />}/>}/>
        </RequireAuth>
        <Redirect to='/' />
      </Switch>
      <GlobalStyle />
    </ BrowserRouter>
  </UserContextProvider>, document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
