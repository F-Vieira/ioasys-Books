import * as Ipt from "./styles";
import Button from "../Button";
import { Spin, FadingBalls } from "react-cssfx-loading";

const Input = ({
  label,
  inputType,
  hasButton,
  register,
  name,
  buttonType,
  isLoading = false,
}) => {
  return (
    <Ipt.Container>
      <Ipt.Label>{label}</Ipt.Label>
      <div>
        <Ipt.Input type={inputType} {...register(name)} />
        {hasButton && (
          <Button type={buttonType}>
            {isLoading ? (
              <Spin color="#B22E6F" width="30px" height="30px" />
            ) : (
              "Entrar"
            )}
          </Button>
        )}
      </div>
    </Ipt.Container>
  );
};

export default Input;
