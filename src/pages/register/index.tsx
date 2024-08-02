import { Form, Link, useActionData } from "react-router-dom";
import { useEffect, useState } from "react";

import userPlugSvg from "/images/user-plus.svg";
import envelopeSvg from "/images/email-envelope.svg";
import loginSvg from "/images/login.svg";
import lockSvg from "/images/lock.svg";

import { SRegister } from "./styles";
import { FullLoading } from "../../components/full-loading";
import { ValidatedRegister } from "./action/validated_register";

export const Register = () => {
  const [validatedRegister, setValidatedRegister] = useState<ValidatedRegister>();

  const [isLoading, setIsLoading] = useState(true);
  // const [isVisiblePassword, setIsVisiblePassword] = useState(false);

  const data = useActionData();
  useEffect(() => {
    if (data instanceof ValidatedRegister) {
      setValidatedRegister(data);
    }
    setIsLoading(false);
  }, [data]);

  return (
    <>
      {isLoading && <FullLoading />}
      <SRegister>
        <div className="form-container">
          {validatedRegister?.isValid ? (
            <div className="email-request">
              <h3>Enviamos um email de verificação para: </h3>
              <div className="para">{validatedRegister.registerFormData.email}</div>
              <img src={envelopeSvg}></img>
              <div>Verifique na sua caixa de entrada ou span.</div>
            </div>
          ) : (
            <>
              <Form method="POST" onSubmit={() => setIsLoading(true)}>
                <h1>Criar Conta</h1>
                <div className="fields-container">
                  <div className="field-container">
                    <label htmlFor="register-username">Nome Completo:</label>
                    <input
                      name="username"
                      className="register-input"
                      id="register-username"
                    ></input>
                    <div>
                      {validatedRegister?.registerErrors.username.map((val, ind) => (
                        <div key={ind}>{val}</div>
                      ))}
                    </div>
                  </div>

                  <div className="field-container">
                    <label htmlFor="register-email">Email:</label>
                    <input name="email" className="register-input" id="register-email"></input>
                    <div>
                      {validatedRegister?.registerErrors.email.map((val, ind) => (
                        <div key={ind}>{val}</div>
                      ))}
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
                      {validatedRegister?.registerErrors.password.map((val, ind) => (
                        <div key={ind}>{val}</div>
                      ))}
                    </div>
                  </div>
                </div>
                <button className="button" type="submit">
                  Cadastrar-se
                  <img src={userPlugSvg}></img>
                </button>
                <div className="login-display show-in-short-screen">
                  <h3>Já tem uma conta?</h3>
                  <Link className="button" to="/login">
                    Entrar
                    <img src={loginSvg}></img>
                  </Link>
                </div>
              </Form>
              <div className="register-content">
                {/* <h2 className="tip">Use seu email institucional</h2> */}
                <div className="register-mail-content">
                  <h3>Enviaremos um email de verificação</h3>
                  <div className="mail-images-container">
                    <img className="lock-svg" src={lockSvg}></img>
                    <div>
                      <img className="envelope-svg" src={envelopeSvg} />
                    </div>
                  </div>
                </div>
                <div className="login-display">
                  <h3>Já tem uma conta?</h3>
                  <Link className="button" to="/login">
                    Entrar
                    <img src={loginSvg}></img>
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
      </SRegister>
    </>
  );
};
