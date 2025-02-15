import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get('/api/user')
      .then(response => setUser(response.data))
      .catch(() => setUser(null));
  }, []);

  const login = () => {
    window.location.href = 'http://localhost:5000/auth/login';
  };

  const logout = () => {
    window.location.href = 'http://localhost:5000/auth/logout';
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};