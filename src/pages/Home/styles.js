import styled from "styled-components";
import HomeBackground from "../../assets/homeBackground.svg";
import Back from "../../assets/BackgroundImage.svg";

export const Container = styled.main`
  background-image: url(${HomeBackground});
  background-repeat: no-repeat;
  background-size: cover;

  section:first-child {
    padding: 40px 0 40px 35px;
  }
`;

export const Content = styled.section`
  padding-bottom: 45px;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  grid-gap: 15px 0;
`;

export const Logout = styled.div`
  width: 32px;
  height: 32px;

  border: 1px solid rgba(51, 51, 51, 0.2);
  border-radius: 50px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  position: absolute;
  top: 45px;
  right: 35px;
  svg {
    width: 70%;
    height: 70%;
    color: var(--gray);
  }
`;
