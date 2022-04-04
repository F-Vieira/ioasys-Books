import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Form from "../../components/Form";
import * as L from "./styles";

import Input from "../../components/Input";
import Error from "../../components/Error";
import LogoBox from "../../components/LogoBox";

import WhiteLogo from "../../assets/whiteLogo.svg";

import { useUser } from "../../providers/User";

const Login = () => {
  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const { handleLogin, error, loading } = useUser();

  const submitLogin = (data) => {
    handleLogin(data);
  };

  return (
    <L.Container>
      <LogoBox logo={WhiteLogo} whiteMode isPageLogin />

      <Form handleSubmit={handleSubmit} submit={submitLogin}>
        <Input
          label="E-mail"
          inputType="text"
          register={register}
          name="email"
        />
        <Input
          label="Senha"
          inputType="password"
          register={register}
          name="password"
          buttonType="submit"
          hasButton
          isLoading={loading}
        />
        {!!error && <Error message={error} />}
      </Form>
    </L.Container>
  );
};

export default Login;
