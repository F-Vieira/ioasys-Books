import * as Ipt from "./styles";

const Input = ({ label, inputType, hasButton, register, name, buttonType }) => {
  return (
    <Ipt.Container>
      <Ipt.Label>{label}</Ipt.Label>
      <div>
        <Ipt.Input type={inputType} {...register(name)} />
        {hasButton && <Ipt.Button type={buttonType}>Entrar</Ipt.Button>}
      </div>
    </Ipt.Container>
  );
};

export default Input;
