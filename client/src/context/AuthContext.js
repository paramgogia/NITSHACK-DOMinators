// context/AuthContext.js
"use client"

import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = async ({ email, password }) => {
    try {
      setLoading(true);
      setError(null);
      // Here you would typically make an API call to your backend
      // For demo purposes, we'll simulate a successful login
      const response = await mockLoginAPI({ email, password });
      setUser(response.user);
      return { success: true };
    } catch (err) {
      setError(err.message);
      return { success: false, error: err.message };
    } finally {
      setLoading(false);
    }
  };

  const signup = async ({ name, email, password }) => {
    try {
      setLoading(true);
      setError(null);
      // Here you would typically make an API call to your backend
      // For demo purposes, we'll simulate a successful signup
      const response = await mockSignupAPI({ name, email, password });
      setUser(response.user);
      return { success: true };
    } catch (err) {
      setError(err.message);
      return { success: false, error: err.message };
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{
      user,
      loading,
      error,
      login,
      signup,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);

// Mock API functions (replace these with real API calls)
const mockLoginAPI = async ({ email, password }) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Simulate basic validation
  if (!email || !password) {
    throw new Error('Email and password are required');
  }
  
  return {
    user: {
      id: '1',
      email,
      name: 'Test User'
    }
  };
};

const mockSignupAPI = async ({ name, email, password }) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Simulate basic validation
  if (!email || !password || !name) {
    throw new Error('All fields are required');
  }
  
  return {
    user: {
      id: '1',
      email,
      name
    }
  };
};