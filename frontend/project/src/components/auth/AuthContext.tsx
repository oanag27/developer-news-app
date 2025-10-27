import React, { createContext, useContext, useState, useEffect } from 'react';

interface AuthContextType {
  token: string | null;
  email: string | null;
  role: string | null;
  login: (token: string, email: string, role: string) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [token, setToken] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    const storedEmail = localStorage.getItem('email');
    const storedRole = localStorage.getItem('role');
    
    if (storedToken) {
      setToken(storedToken);
      setEmail(storedEmail);
      setRole(storedRole);
    }
  }, []);

  const login = (newToken: string, newEmail: string, newRole: string) => {
    setToken(newToken);
    setEmail(newEmail);
    setRole(newRole);
    
    localStorage.setItem('token', newToken);
    localStorage.setItem('email', newEmail);
    localStorage.setItem('role', newRole);
  };

  const logout = () => {
    setToken(null);
    setEmail(null);
    setRole(null);
    
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    localStorage.removeItem('role');
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        email,
        role,
        login,
        logout,
        isAuthenticated: !!token,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};