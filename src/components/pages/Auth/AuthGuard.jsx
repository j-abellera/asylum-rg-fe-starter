import React from 'react';
import { withAuthenticationRequired } from '@auth0/auth0-react';

const AuthGuard = ({ component }) => {
  const Guard = withAuthenticationRequired(component, {
    onRedirecting: () => (
      <div className="page-loading">
        <h2>Loading...</h2>
      </div>
    ),
  });

  return <Guard />;
};

export default AuthGuard;
