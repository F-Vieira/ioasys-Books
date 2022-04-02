import styled from "styled-components";
import LoginBackground from "../../assets/loginBackground.svg";

export const Container = styled.main`
  background-image: url(${LoginBackground});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 40%;

  height: 100vh;
  padding: 0 15px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  section {
    margin-bottom: 2.5rem;
  }

  @media screen and (min-width: 768px) {
    align-items: flex-start;
    padding-left: 80px;
  }
`;
