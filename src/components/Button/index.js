import * as B from "./styles";

const Button = ({ type, children }) => {
  return <B.Container type={type}>{children}</B.Container>;
};

export default Button;
