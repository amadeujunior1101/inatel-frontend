import { JwtPayload, jwtDecode } from 'jwt-decode';
import React, { ReactNode, createContext, useContext, useEffect, useMemo, useState } from 'react';

// Defina o tipo para o contexto
interface AuthContextType {
  role: string;
  addRole: (name: string) => void;
  updateUser: (newUser: { id: string; name: string }) => void;
  user: { id: string; name: string };
}

// Defina o tipo para o payload do JWT
interface IJwtDecode extends JwtPayload {
  roles: string;
  userId: string;
}

// Crie o contexto com um valor padrão
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Crie uma interface para as propriedades do componente TimeProvider
interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [role, setRole] = useState('');
  const [user, setUser] = useState({id: '', name: ''});

  const addRole = (name: string) => {
    setRole(name);
  };

  const updateUser = (newUser: {id: string, name: string}) => {
    setUser((prevState) => ({
      ...prevState,
      ...newUser,
    }));
  };

  useEffect(() => {
    const token = localStorage.getItem('auth');
    if (token) {
      const decodedToken: IJwtDecode = jwtDecode(token);
      addRole(decodedToken.roles);
      updateUser({ id: decodedToken.userId, name: 'José da Silva Santos' });
    }
  }, []);

  const contextValue = useMemo(() => ({ 
    role, addRole, updateUser, user
  }), [role, user]);

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

// Crie um hook personalizado para facilitar o uso do contexto
const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useTimeContext deve ser usado dentro de um TimeProvider');
  }
  return context;
};

// eslint-disable-next-line react-refresh/only-export-components
export { AuthContext, AuthProvider, useAuthContext };
