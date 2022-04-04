import * as F from "./styles";

const Form = ({ children, handleSubmit, submit }) => {
  return <F.Container onSubmit={handleSubmit(submit)}>{children}</F.Container>;
};

Form.defaultProps = {
  children: "Conteúdo do form",
  handleSubmit: "",
  submit: "",
};

export default Form;
