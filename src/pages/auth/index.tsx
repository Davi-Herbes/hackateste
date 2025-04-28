import { Outlet } from "react-router-dom";
import { NotLoggedInRequired } from "../../routes/not-logged-in-required";

export const AuthPages = () => {
  return (
    <>
      <NotLoggedInRequired>
        <Outlet />
      </NotLoggedInRequired>
    </>
  );
};
