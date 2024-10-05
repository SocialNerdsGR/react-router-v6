import { Link, Outlet } from "react-router-dom";

export function User() {
  return (
    <div>
      <div>
        <Link to="profile">Profile</Link>
        <Link to="billing">Billing</Link>
      </div>
      <Outlet />
    </div>
  );
}
