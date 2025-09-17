import React, { createContext, useContext, useState } from "react";

interface AuthContextType {
  user: string | null;
  login: (username: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  /* TODO: Add user state here */

  /* TODO: Create login function */

  /* TODO: Create logout function */

  /* TODO: Create context value object */

  return (
    /* TODO: Wrap children with AuthContext.Provider */
    <>{children}</>
  );
}

export function useAuth() {
  /* TODO: Get context and handle undefined case */
}
