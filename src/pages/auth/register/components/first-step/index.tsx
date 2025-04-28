import { Form, useActionData } from "react-router-dom";
import envelopeSvg from "/images/email-envelope.svg";
import React, { useEffect, useState } from "react";
import { RegisterValidator } from "../../action/validated_register";

interface FirstStepProps {
  loadingState: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
  unconfirmedEmailState: [string, React.Dispatch<React.SetStateAction<string>>];
  carousel: HTMLElement | null;
}

export const FirstStep = ({ carousel, loadingState, unconfirmedEmailState }: FirstStepProps) => {
  const [emailErrorMsg, setEmailErrorMsg] = useState("");
  const [usernameErrorMsg, setUsernameErrorMsg] = useState("");
  const [passwordErrorMsg, setPasswordErrorMsg] = useState("");
  const [, setUnconfirmedEmail] = unconfirmedEmailState;

  const [, setIsLoading] = loadingState;

  const actionData = useActionData();

  useEffect(() => {
    if (!(actionData instanceof RegisterValidator)) {
      console.log("OPA");
      return;
    }

    setIsLoading(false);

    if (!actionData.isValid) {
      setUsernameErrorMsg(actionData.registerErrors.username[0] ?? "");
      setEmailErrorMsg(actionData.registerErrors.email[0] ?? "");
      setPasswordErrorMsg(actionData.registerErrors.password[0] ?? "");

      console.log(carousel);
      console.log("aAAAAAAAAAAAA");
      return;
    }

    console.log(carousel);

    setUnconfirmedEmail(actionData.registerFormData.email);

    carousel?.classList.toggle("carousel-position-1");
  }, [actionData]);

  return (
    <div className="step first-step">
      <div className="first-step-column-1">
        <img
          className="graph-img"
          src="/hackateste/images/graph.svg"
          alt="Duas mãos segurando dados"
        />
      </div>
      <div className="first-step-column-2">
        <h1 className="first-step-title">Criar Conta</h1>
        <Form
          onSubmit={() => {
            setIsLoading(true);
          }}
          className="mail-sending-form"
          method="POST"
        >
          <label className="mail-form-label" htmlFor="username-input">
            Nome de usuário
            <input type="text" name="username" id="username-input" />
            <div className="error-message">{usernameErrorMsg}</div>
          </label>
          <label className="mail-form-label" htmlFor="email-input">
            Email
            <input type="text" name="email" id="email-input" />
            <div className="error-message">{emailErrorMsg}</div>
          </label>
          <label className="mail-form-label" htmlFor="password-input">
            Senha
            <input type="password" name="password" id="password-input" />
            <div className="error-message">{passwordErrorMsg}</div>
          </label>
          <div className="submit-email-button-container">
            <span>Enviar e-mail de verificação</span>
            <button type="submit">
              <img src={envelopeSvg} alt="email-envelope" />
              Confirmar
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
};
