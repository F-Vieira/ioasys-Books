import styled from "styled-components";
import LoginBackground from "../../assets/loginBackground.svg";

export const Container = styled.main`
  background-image: url(${LoginBackground});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: -280px;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LogoBox = styled.div`
  display: flex;

  width: 90%;
  margin-bottom: 50px;

  h1 {
    margin-left: 16.6px;
    font-weight: lighter;
    font-size: 28px;
    color: var(--white);
  }
`;
