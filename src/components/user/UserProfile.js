import React from 'react';
import { useSelector } from 'react-redux';

const UserProfile = () => {
  const user = useSelector((state) => state.auth.user);

  if (!user) {
    return <p>Please log in</p>;
  }

  return (
    <div>
      <h2>Welcome, {user.name}</h2>

    </div>
  );
};

export default UserProfile;