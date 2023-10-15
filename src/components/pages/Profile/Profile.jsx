import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  console.log(user);
  return (
    isAuthenticated && (
      <div id="profile-container">
        <h2 style={{ textAlign: 'center' }}>
          Welcome back, {user.given_name}!
        </h2>
        <article style={{ textAlign: 'center' }}>
          <img src={user.picture} alt="profile visual" />
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </article>
      </div>
    )
  );
};

export default Profile;
