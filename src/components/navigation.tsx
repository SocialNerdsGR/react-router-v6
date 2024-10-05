import { Link } from "react-router-dom";
import { useAuth } from "../data/auth";

export function Navigation() {
  const auth = useAuth();
  return (
    <div>
      <Link style={{ marginRight: 5 }} to="home">
        Home
      </Link>
      <Link style={{ marginRight: 5 }} to="movies">
        Movies
      </Link>
      <Link to="user">User</Link>
      {auth.isAuthenticated && <button onClick={auth.logout}>Logout</button>}
    </div>
  );
}
