import { Form, useActionData, useNavigate } from "react-router-dom";
import { SLogin } from "./styles";
import { useEffect, useState } from "react";
import { ValidatedLogin } from "./action/validated_login";
import userSvg from "/images/user.svg";
import { FullLoading } from "../../../components/full-loading";

export const Login = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [validatedLogin, setValidatedLogin] = useState<ValidatedLogin>();

  const navigate = useNavigate();

  const data = useActionData();
  useEffect(() => {
    if (data instanceof ValidatedLogin) {
      setValidatedLogin(data);

      if (data.isValid) {
        navigate("/");
      }
    }
    setIsLoading(false);
  }, [data]);

  return (
    <>
      {isLoading ? <FullLoading /> : ""}
      <SLogin>
        <div className="form-container">
          <Form method="POST" onSubmit={() => setIsLoading(true)}>
            <h1>Entrar</h1>
            <div className="fields-container">
              <div className="field-container">
                <label htmlFor="register-email">Email:</label>
                <input name="email" className="register-input" id="register-email"></input>
                <div>
                  {validatedLogin?.loginErrors.email.map((val, ind) => <div key={ind}>{val}</div>)}
                </div>
              </div>

              <div className="field-container">
                <label htmlFor="register-password">Senha:</label>
                <input
                  className="register-input"
                  name="password"
                  id="register-password"
                  type="password"
                ></input>
                <div>
                  {validatedLogin?.loginErrors.password.map((val, ind) => (
                    <div key={ind}>{val}</div>
                  ))}
                </div>
              </div>
            </div>
            <button className="button" type="submit">
              Cadastrar-se
              <img src={userSvg}></img>
            </button>
          </Form>
        </div>
      </SLogin>
    </>
  );
};
