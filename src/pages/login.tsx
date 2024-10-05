import { useAuth } from "../data/auth";

export function Login() {
  const auth = useAuth();

  return (
    <div>
      <button onClick={auth.login}>Login</button>
    </div>
  );
}
