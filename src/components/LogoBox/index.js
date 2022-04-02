import * as L from "./styles";

const LogoBox = ({ logo, whiteMode, isPageLogin }) => {
  return (
    <L.Container whiteMode={whiteMode} isPageLogin={isPageLogin}>
      <img src={logo} alt="Logo ioasys" />
      <h1>Books</h1>
    </L.Container>
  );
};

export default LogoBox;
