import type React from 'react';
import Login from './Login';
import type { ProfileTypes } from './Profile';

type PrivateProps = {
  isLoggedIn: boolean;
  component: React.ComponentType<ProfileTypes>;
};

export const Private = ({ isLoggedIn, component: Component }: PrivateProps) => {
  if (isLoggedIn) {
    return <Component name="Eren" />;
  } else {
    return <Login />;
  }
};
