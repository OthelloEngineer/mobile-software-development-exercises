import React, { createContext, useContext, useState } from "react";

interface AuthContextType {
  user: string | null;
  login: (username: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  /* TODO: Add user state here */
  const [user, setUser] = useState<string | null>(null);

  /* TODO: Create login function */
  const login = (username: string) => {
    setUser(username);
  };

  /* TODO: Create logout function */
  const logout = () => {
    setUser(null);
  };

  /* TODO: Create context value object */
  const value = { user, login, logout };

  return (
    /* TODO: Wrap children with AuthContext.Provider */
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  );
}

export function useAuth() {
  /* TODO: Get context and handle undefined case */
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
