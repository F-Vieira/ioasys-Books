import Input from "../Input";

import * as F from "./styles";

const Form = () => {
  return (
    <F.Container>
      <Input field="E-mail" inputType="text" />
      <Input field="Senha" inputType="password" hasButton />
    </F.Container>
  );
};

export default Form;
