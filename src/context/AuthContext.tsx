import React, { FC, createContext, useContext, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
const AuthContext = createContext({
  isAuthenticated: false,
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
  const logoutHandler = async () => {
    setIsAuthenticated(false);
    await AsyncStorage.clear();
  };
  const loginHandler = async (token: string) => {
    setIsAuthenticated(true);
    await AsyncStorage.setItem('token', token);
  };
  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: isAuthenticated,
        onLogin: loginHandler,
        onLogout: logoutHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
