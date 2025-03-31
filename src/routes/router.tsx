import { createBrowserRouter } from "react-router-dom";
import { App } from "../app";

import { Home } from "../pages/home";
import { Register } from "../pages/register";

import { registerAction } from "../pages/register/action/register_action";
import { NotFoundPage } from "../pages/not-found";
import { Profile } from "../pages/profile";
import { Login } from "../pages/login";
import { loginAction } from "../pages/login/action/login_action";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,

      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "auth",
          children: [
            {
              path: "register",
              element: <Register />,
              action: registerAction,
            },

            {
              path: "login",
              element: <Login />,
              action: loginAction,
            },
          ],
        },

        {
          path: "profile",
          element: <Profile />,
        },
        {
          path: "*",
          element: <NotFoundPage />,
        },
      ],
    },
  ],
  { basename: "/hackateste" },
);
