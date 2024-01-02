import React, { FC, createContext, useContext, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
const AuthContext = createContext({
  isAuthenticated: false,
  token: '',
  onLogout: () => {},
  onLogin: (token: string) => {},
});

export const useAuthContext = () => useContext(AuthContext);

type AuthContextProviderProps = {
  children: React.ReactNode;
};
export const AuthContextProvider: FC<AuthContextProviderProps> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState('');
  const logoutHandler = async () => {
    setIsAuthenticated((prev) => false);
    setToken((prev) => '');
  };
  const loginHandler = async (token: string) => {
    setIsAuthenticated((prev) => true);
    setToken((prev) => token);
  };
  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: isAuthenticated,
        token: token,
        onLogin: loginHandler,
        onLogout: logoutHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
