import { useContext } from 'react';

import { Redirect } from 'react-router-dom';

import { UserContext } from './contexts/UserContext.js';

export const RequireAuth = ({ children }) => {
  const context = useContext(UserContext);

  if (!context.auth) {
    return <Redirect to='/' />;
  }

  return children;
};