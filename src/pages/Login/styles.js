import styled from "styled-components";
import BackgroundImage from "../../assets/BackgroundImage.svg";

export const Container = styled.main`
  background-image: url(${BackgroundImage});
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
  /* border: 1px solid white; */

  h1 {
    margin-left: 16.6px;
    font-weight: lighter;
    font-size: 28px;
    color: var(--white);
  }
`;