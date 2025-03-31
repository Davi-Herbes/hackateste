import { Form, useActionData, useNavigate } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";

import { SRegister } from "./styles";
import { FullLoading } from "../../components/full-loading";
import { ValidatedRegister } from "./action/validated_register";
import { confirmUser } from "../../api/auth/confirm";

export const Register = () => {
  const navigate = useNavigate();

  const [validatedRegister, setValidatedRegister] = useState<ValidatedRegister>();
  const sendMailButtonRef = useRef<HTMLButtonElement>(null);
  const confirmationButtonRef = useRef<HTMLButtonElement>(null);
  const confirmationContainerRef = useRef<HTMLDivElement>(null);

  const [canSubmitMail, setCanSubmitMail] = useState(true);
  const [confirmationCodeValue, setConfirmationCodeValue] = useState<number>();
  const [isLoading, setIsLoading] = useState(true);
  // const [isVisiblePassword, setIsVisiblePassword] = useState(false);

  const data = useActionData();
  useEffect(() => {
    if (data instanceof ValidatedRegister) {
      setValidatedRegister(data);
      validatedForm(data);
    }
    setIsLoading(false);
  }, [data]);

  async function handleConfirmationAttempt(e: React.FormEvent) {
    e.preventDefault();
    if (!confirmationCodeValue) return;
    const response = await confirmUser(confirmationCodeValue);

    if (response) {
      navigate("/");
    }
  }

  function handleConfirmationInputUpdate(e: React.ChangeEvent<HTMLInputElement>) {
    if (!confirmationButtonRef.current) return;

    const value = e.target.value;

    const numericValue = value.replace(/\D/g, "");
    e.target.value = numericValue;

    if (numericValue.length !== 6) {
      confirmationButtonRef.current.disabled = true;
    } else {
      confirmationButtonRef.current.disabled = false;
      setConfirmationCodeValue(Number(numericValue));
    }
  }

  async function validatedForm(data: ValidatedRegister) {
    if (!canSubmitMail) return;
    setCanSubmitMail(false);

    if (!(data && data.isValid)) return;

    if (!confirmationContainerRef.current) return;
    if (!sendMailButtonRef.current) return;

    confirmationContainerRef.current.classList.remove("disabled");
    sendMailButtonRef.current.disabled = true;

    let segundos = 30;
    sendMailButtonRef.current.innerHTML = `Enviado ${segundos}s`;
    segundos -= 1;
    const interval = await new Promise<NodeJS.Timeout>((res) => {
      const intervalId = setInterval(() => {
        if (!sendMailButtonRef.current) return;
        sendMailButtonRef.current.innerHTML = `Enviado ${segundos}s`;
        segundos -= 1;

        if (segundos === 0) {
          res(intervalId);
        }
      }, 1000);
    });

    clearInterval(interval);
    setCanSubmitMail(true);
    sendMailButtonRef.current.innerHTML = `Enviar`;

    sendMailButtonRef.current.disabled = false;
  }

  return (
    <>
      {isLoading && <FullLoading />}
      <SRegister>
        <div className="form-container">
          <>
            <div className="form-image">
              <h1>Criar Conta</h1>
              <img src="/hackateste/images/register-icon.svg" alt="" />
            </div>

            <div className="form-fields-container">
              <Form onSubmit={() => setIsLoading(true)} className="fields-form" method="POST">
                <div className="fields-container">
                  <div className="field-container">
                    <label htmlFor="register-username">Nome Completo:</label>
                    <input
                      name="username"
                      className="register-input"
                      id="register-username"
                    ></input>
                    <div className="error-message">
                      {validatedRegister?.registerErrors.username.map((val, ind) => (
                        <div key={ind}>{val}</div>
                      ))}
                    </div>
                  </div>

                  <div className="field-container">
                    <label htmlFor="register-email">Email:</label>
                    <input name="email" className="register-input" id="register-email"></input>
                    <div className="error-message">
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
                    <div className="error-message">
                      {validatedRegister?.registerErrors.password.map((val, ind) => (
                        <div key={ind}>{val}</div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="confirmation-send">
                  <span>Precisamos enviar um email para a verificação</span>
                  <button ref={sendMailButtonRef} type="submit">
                    Enviar
                  </button>
                </div>
              </Form>
              <div className="confirmation-container disabled" ref={confirmationContainerRef}>
                <div className="confirmation-title">Digite o código recebido:</div>
                <form onSubmit={(e) => handleConfirmationAttempt(e)} className="submit-mail-fields">
                  <input
                    onChange={handleConfirmationInputUpdate}
                    type="text"
                    maxLength={6}
                    pattern="\d{6}"
                    disabled={validatedRegister?.isValid ? false : true}
                  />
                  <button
                    disabled
                    ref={confirmationButtonRef}
                    className="confirmation-button"
                    type="submit"
                  >
                    Confirmar
                  </button>
                </form>
              </div>
            </div>
          </>
        </div>
      </SRegister>
    </>
  );
};
