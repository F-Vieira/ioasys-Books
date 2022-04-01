import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Form from "../../components/Form";
import * as L from "./styles";

import Logo from "../../assets/Logo.svg";
import Input from "../../components/Input";
import Error from "../../components/Error";
import { useUser } from "../../providers/User";

const Login = () => {
  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const { handleLogin, error } = useUser();

  const submitLogin = (data) => {
    handleLogin(data);
  };

  return (
    <L.Container>
      <L.LogoBox>
        <img src={Logo} alt="Logo ioasys" />
        <h1>Books</h1>
      </L.LogoBox>
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
        />
        {!!error && <Error message={error} />}
      </Form>
    </L.Container>
  );
};

export default Login;
