import { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }: {children: React.ReactNode}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => setIsAuthenticated(true);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login }}>
      {children}
    </AuthContext.Provider>
  );
};