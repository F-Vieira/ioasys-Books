import * as Ipt from "./styles";

const Input = ({ field, inputType, hasButton }) => {
  return (
    <Ipt.Container>
      <Ipt.Label>{field}</Ipt.Label>
      <Ipt.InputBox>
        <Ipt.Input type={inputType} />
        {hasButton && <Ipt.Button>Entrar</Ipt.Button>}
      </Ipt.InputBox>
    </Ipt.Container>
  );
};

export default Input;
