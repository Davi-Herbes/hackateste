import { useEffect, useState } from "react";
import { Button } from "../../components/button";
import { Input } from "../../components/form-field-components/input";
import { ButtonContainer, InputContainer, SLogin } from "./styles";
import { Form, useActionData } from "react-router-dom";
import { LoginFormError } from "../../store/user-store/actions/errors/login-form-error";
import { Label } from "../../components/form-field-components/label";
import { ErrorMsg } from "../../components/form-field-components/error-message";

export const Login = () => {
  // Estados das mensagens de erro que serão colocadas em seus campos.
  const [emailMsg, setEmailMsg] = useState("");
  const [passwordMsg, setPasswordMsg] = useState("");

  // A partir do nome do campo, define os seus erros
  const errorHandler = {
    email: (msg: string) => setEmailMsg(msg),
    password: (msg: string) => setPasswordMsg(msg),
  };

  // Dados retornados pela action do Form do react-router-dom
  const data = useActionData() as LoginFormError[] | undefined;

  // Ao usar data como dependência, a cada vez que seu valor mudar, ele ira retornar os erros
  useEffect(() => {
    // Se não tem nada é pq o action ainda não foi chamado
    if (!data) return;

    // Pega cada erro e coloca no seu campo
    data.forEach((v) => {
      errorHandler[v.field](v.message);
    });
  }, [data]);

  // Tira os erros ao formulário ser enviado
  const handleSubmit = async () => {
    setEmailMsg("");
    setPasswordMsg("");
  };
  return (
    <SLogin>
      <Form method="post" onSubmit={handleSubmit}>
        <div>
          <h2>Entre na sua conta:</h2>
          <InputContainer>
            <Label htmlFor="login-email">Email: </Label>
            <Input id="login-email" name="email"></Input>
            <ErrorMsg>{emailMsg}</ErrorMsg>

            <Label htmlFor="login-password">Senha: </Label>
            <Input id="login-password" type="password" name="password"></Input>
            <ErrorMsg>{passwordMsg}</ErrorMsg>
          </InputContainer>
          <ButtonContainer>
            <Button type="submit">Entrar</Button>
          </ButtonContainer>
        </div>
      </Form>
    </SLogin>
  );
};
