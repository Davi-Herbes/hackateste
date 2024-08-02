import { createBrowserRouter } from "react-router-dom";
import { App } from "./app";

import { Home } from "./pages/home";
import { Register } from "./pages/register";
import { AddItem } from "./pages/add-item";
import { RemoveItem } from "./pages/remove-item";
import { RequestPage } from "./pages/request";
import { Confirm } from "./pages/register/children/confirm";

import { registerAction } from "./pages/register/action/register_action";
import { NotFoundPage } from "./pages/not-found";
import { Profile } from "./pages/profile";
import { Login } from "./pages/login";
import { loginAction } from "./pages/login/action/login_action";

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
          path: "register",
          element: <Register />,
          action: registerAction,
        },

        {
          path: "login",
          element: <Login />,
          action: loginAction,
        },

        {
          path: "register/confirm/:token",
          element: <Confirm />,
        },

        {
          path: "add-item",
          element: <AddItem />,
        },
        {
          path: "remove-item",
          element: <RemoveItem />,
        },
        {
          path: "requests",
          element: <RequestPage />,
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
