import Form from "../../components/Form";
import * as L from "./styles";

import Logo from "../../assets/Logo.svg";

const Login = () => {
  return (
    <L.Container>
      <L.LogoBox>
        <img src={Logo} alt="Logo ioasys" />
        <h1>Books</h1>
      </L.LogoBox>
      <Form />
    </L.Container>
  );
};

export default Login;
