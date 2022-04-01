import * as F from "./styles";

const Form = ({ children, handleSubmit, submit }) => {
  return <F.Container onSubmit={handleSubmit(submit)}>{children}</F.Container>;
};

export default Form;
