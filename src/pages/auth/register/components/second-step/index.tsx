import { FormEvent, useState } from "react";
import { UserConfirmer } from "../../../../../api/auth/register/confirm/confirm";
import { useNavigate } from "react-router-dom";

interface SecondStepProps {
  email: string;
  loadingState: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
}

export function CodeInput() {
  const [code, setCode] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    let value = e.target.value;

    // Remove qualquer coisa que não seja número
    value = value.replace(/\D/g, "");

    // Limita a 6 caracteres
    if (value.length > 6) {
      value = value.slice(0, 6);
    }

    setCode(value);
  }

  return (
    <input
      type="text"
      placeholder="Digite aqui"
      value={code}
      onChange={handleChange}
      maxLength={6}
      name="code"
    />
  );
}

export const SecondStep = ({ email, loadingState }: SecondStepProps) => {
  const navigate = useNavigate();
  const [invalidCode, setInvalidCode] = useState(false);

  const [, setIsLoading] = loadingState;

  const [canSubmit, setCanSubmit] = useState(true);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!canSubmit) return;

    setCanSubmit(false);

    const form = e.target;
    if (!(form instanceof HTMLFormElement)) return;

    const formData = new FormData(form);

    const code = formData.get("code");
    if (typeof code !== "string") return;

    const numberCode = Number.parseInt(code);

    const userConfirmer = new UserConfirmer();

    setIsLoading(true);
    const isConfirmed = await userConfirmer.confirmUser(numberCode);
    setIsLoading(false);

    setTimeout(() => {
      setCanSubmit(true);
    }, 1000);

    if (isConfirmed) {
      navigate("/");
    } else {
      setInvalidCode(true);
    }
  }

  return (
    <div className="confirmation-container step">
      <header className="title-container">
        <h1>Confirmação de email</h1>
        <h2>Enviamos um código para {email || "TESTE@EMAIL.COM"}</h2>
      </header>
      <div className="confirmation-form-container">
        <form onSubmit={(e) => handleSubmit(e)} action="/" className="confirm-form">
          <label htmlFor="confirmation-input">
            Digite o código recebido abaixo:
            <CodeInput />
          </label>
        </form>
        {invalidCode && <h2 className="error">Código inválido.</h2>}
      </div>
    </div>
  );
};
