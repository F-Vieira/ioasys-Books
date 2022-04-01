import * as L from "./styles";

const LogoBox = ({ logo, whiteMode }) => {
  return (
    <L.Container whiteMode={whiteMode}>
      <img src={logo} alt="Logo ioasys" />
      <h1>Books</h1>
    </L.Container>
  );
};

export default LogoBox;
