import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { confirmUser } from "../../../../api/auth/confirm";
import { NotFoundPage } from "../../../not-found";

export const Confirm = () => {
  const { token } = useParams<{ token: string }>();
  const [authorized, setAuthorized] = useState(true);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const response = await confirmUser(token as string);
      setAuthorized(response);

      setLoading(false);
    })();
  }, [token]);

  return <>{loading ? "" : authorized ? navigate("/") : <NotFoundPage />}</>;
};
