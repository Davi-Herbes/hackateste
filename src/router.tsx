import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home";
import { App } from "./app";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { ProtectedRoute } from "./pages/protected-route";
import { logUserAction } from "./store/user-store/actions/login-action";
import { Logout } from "./pages/logout";
import { registerAction } from "./store/user-store/actions/register-action";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        action: logUserAction,
      },
      {
        path: "/login",
        element: (
          <ProtectedRoute>
            <Login />
          </ProtectedRoute>
        ),
        action: logUserAction,
      },
      {
        path: "/register",
        element: <Register />,
        action: registerAction,
      },
      {
        path: "/logout",
        element: <Logout />,
      },
    ],
  },
]);
