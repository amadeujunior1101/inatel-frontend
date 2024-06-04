import { Navigate } from 'react-router-dom';
interface PrivateRouteProps {
  children: React.ReactNode;
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const token = localStorage.getItem('auth');

    if (token) {
      return <>{children}</>;
    } else {
        return <Navigate to='/login' />;
    }
};
