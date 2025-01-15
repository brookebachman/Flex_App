import React, { createContext, useState, useContext, useEffect } from "react";

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check for token on load
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true); // If token exists, assume authenticated
    }
  }, []);

  const login = () => {
    setIsAuthenticated(true);
    localStorage.setItem("token", token); // Store token
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("token"); // Clear token
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
