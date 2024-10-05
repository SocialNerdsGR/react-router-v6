import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { Navigation } from "./components/navigation";
import { NoMatch } from "./components/no-match";
import { Layout } from "./components/layout";
import { Movies } from "./pages/movies";
import { Movie } from "./pages/movie";
import { AuthProvider } from "./data/auth";
import { ProtextedRoute } from "./components/protected-route";
import { Login } from "./pages/login";
import { Profile } from "./pages/profile";
import { Billing } from "./pages/billing";
import { User } from "./pages/user";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route
              path="movies"
              element={
                <ProtextedRoute>
                  <Movies />
                </ProtextedRoute>
              }
            >
              <Route
                path=":id"
                element={
                  <ProtextedRoute>
                    <Movie />
                  </ProtextedRoute>
                }
              />
            </Route>
            <Route
              path="user"
              element={
                <ProtextedRoute>
                  <User />
                </ProtextedRoute>
              }
            >
              <Route index element={<Navigate to="profile" />} />
              <Route
                path="profile"
                element={
                  <ProtextedRoute>
                    <Profile />
                  </ProtextedRoute>
                }
              />
              <Route
                path="billing"
                element={
                  <ProtextedRoute>
                    <Billing />
                  </ProtextedRoute>
                }
              />
            </Route>
            <Route path="login" element={<Login />} />
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
