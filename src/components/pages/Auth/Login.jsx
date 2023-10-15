import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: '/profile',
      },
    });
  };

  return (
    <span onClick={handleLogin} style={{ color: '#E2F0F7', cursor: 'pointer' }}>
      Login
    </span>
  );
};

export default Login;
