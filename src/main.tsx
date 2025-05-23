import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router}></RouterProvider>,
);

/*
  const handleLogout = () => {
    setUser(null);
    toggleIsLoggedIn(false);
    setVisible(true);
  };
*/
