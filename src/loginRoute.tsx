import React from 'react';
import { Navigate } from 'react-router-dom';

interface LoginRouteProps {
  children: React.ReactNode;
}

export const LoginRoute: React.FC<LoginRouteProps> = ({ children }) => {
  const token = localStorage.getItem('auth');

  if (token) {
    return <Navigate to='/' />;
  } else {
    return <>{children}</>;
  }
};
