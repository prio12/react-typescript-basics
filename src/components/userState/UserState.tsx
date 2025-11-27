import { useState } from 'react';

type AuthUser = {
  name: string;
  email: string;
};

const UserState = () => {
  const [user, setUser] = useState<AuthUser | null>(null);

  const handleLogin = () => {
    setUser({ name: 'Eren', email: 'eren@gamil.com' });
  };

  const handleLogOut = () => {
    setUser(null);
  };
  return (
    <div className="text-center my-5">
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogOut}>Logout</button>
      {user && (
        <p>
          {user?.email} {user?.name}{' '}
        </p>
      )}
    </div>
  );
};

export default UserState;
