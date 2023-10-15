import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Logout = () => {
  const { logout } = useAuth0();

  const handleLogout = async () => {
    await logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });
  };

  return (
    <span
      onClick={handleLogout}
      style={{ color: '#E2F0F7', cursor: 'pointer' }}
    >
      Logout
    </span>
  );
};

export default Logout;
