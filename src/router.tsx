import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home";
import { App } from "./app";
import { Register } from "./pages/register";
import { loginAction } from "./store/user-store/actions/login-action";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Register />,
        action: loginAction,
      },
    ],
  },
]);
