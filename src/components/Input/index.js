import * as Ipt from "./styles";

const Input = ({ label, inputType, hasButton, register, name, buttonType }) => {
  return (
    <Ipt.Container>
      <Ipt.Label>{label}</Ipt.Label>
      <Ipt.InputBox>
        <Ipt.Input type={inputType} {...register(name)} />
        {hasButton && <Ipt.Button type={buttonType}>Entrar</Ipt.Button>}
      </Ipt.InputBox>
    </Ipt.Container>
  );
};

export default Input;
