import { Button } from "../../components/button";
import { Input } from "../../components/form-field-components/input";
import { ButtonContainer, InputContainer, SRegister } from "./styles";
import { Label } from "../../components/form-field-components/label";
import { ErrorMsg } from "../../components/form-field-components/error-message";
import { Form, useActionData } from "react-router-dom";
import { useEffect, useState } from "react";
import { RegisterFormError } from "../../store/user-store/actions/errors/register-form-error";

export const Register = () => {
  const [usernameMsg, setUsernameMsg] = useState("");
  const [emailMsg, setEmailMsg] = useState("");
  const [passwordMsg, setPasswordMsg] = useState("");

  // A partir do nome do campo, define os seus erros
  const errorHandler = {
    username: (msg: string) => setUsernameMsg(msg),
    email: (msg: string) => setEmailMsg(msg),
    password: (msg: string) => setPasswordMsg(msg),
  };

  const data = useActionData() as RegisterFormError[] | undefined;
  useEffect(() => {
    if (!data) return;

    data.forEach((v) => {
      errorHandler[v.field](v.message);
    });
  }, [data]);

  return (
    <SRegister>
      <Form method="POST">
        <div>
          <h2>Register</h2>
          <InputContainer>
            <Label htmlFor="register-username">Username:</Label>
            <Input name="username" id="register-username"></Input>
            <ErrorMsg>{usernameMsg}</ErrorMsg>

            <Label htmlFor="register-email">Email:</Label>
            <Input name="email" id="register-email"></Input>
            <ErrorMsg>{emailMsg}</ErrorMsg>

            <Label htmlFor="register-password">Senha:</Label>
            <Input name="password" id="register-password"></Input>
            <ErrorMsg>{passwordMsg}</ErrorMsg>
          </InputContainer>
          <ButtonContainer>
            <Button type="submit">Cadastrar-se</Button>
          </ButtonContainer>
        </div>
      </Form>
    </SRegister>
  );
};
