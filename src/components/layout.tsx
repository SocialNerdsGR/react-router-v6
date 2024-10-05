import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <main style={{ padding: "20px" }}>
      <Outlet />
    </main>
  );
}
