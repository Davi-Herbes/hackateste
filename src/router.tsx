import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home";
import { App } from "./app";
import { Register } from "./pages/register";
import { loginAction } from "./store/user-store/actions/login-action";
import { AddItem } from "./pages/add-item";
import { RemoveItem } from "./pages/remove-item";
import { RequestPage } from "./pages/request";

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
      {
        path: "/add-item",
        element: <AddItem />,
      },
      {
        path: "/remove-item",
        element: <RemoveItem />,
      },
      {
        path: "/requests",
        element: <RequestPage />,
      },
    ],
  },
]);
