import { Navigate } from "react-router-dom";
import { useAuth } from "../data/auth";
import { PropsWithChildren } from "react";

export function ProtextedRoute({ children }: PropsWithChildren) {
  const auth = useAuth();

  if (!auth.isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
}
