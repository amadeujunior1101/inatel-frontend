import { Navigate } from 'react-router-dom';

interface PrivateRouteProps {
	children: React.ReactNode;
}

export const BlockedRoute: React.FC<PrivateRouteProps> = ({ children }) => {
	const user = localStorage.getItem("auth")

	return user ? <Navigate to='/' /> : children;
};