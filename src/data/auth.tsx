import { createContext, PropsWithChildren, useContext, useState } from "react";

const AuthContext = createContext<{
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}>({
  isAuthenticated: false,
  login: () => {
    throw new Error("Implement login");
  },
  logout: () => {
    throw new Error("Implement logout");
  },
});

export function AuthProvider({ children }: PropsWithChildren) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        login: () => setIsAuthenticated(true),
        logout: () => setIsAuthenticated(false),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const auth = useContext(AuthContext);

  if (!auth) {
    throw new Error("useAuth can be used only inside AuthProvider");
  }

  return auth;
}
