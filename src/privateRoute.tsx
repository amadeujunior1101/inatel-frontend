import { jwtDecode, JwtPayload } from 'jwt-decode';
import { Navigate } from 'react-router-dom';

interface IJwtDecode extends JwtPayload {
  roles: string[];
}

interface PrivateRouteProps {
  children: React.ReactNode;
  allowedRole: string[];
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({ children, allowedRole }) => {
  const user = localStorage.getItem("auth");
  const token = localStorage.getItem('auth');

  if (!user || !token) {
    return <Navigate to='/login' />;
  }

  const decodedToken: IJwtDecode = jwtDecode(token);

  if (user !== '' && decodedToken && decodedToken.roles.includes(allowedRole[0])) {
    return <>{children}</>;
  } else {
    if (!user || !decodedToken.roles.includes(allowedRole[0])) {
      return <Navigate to='/login' />;
    } else {
      return <Navigate to='/' />;
    }
  }
};
