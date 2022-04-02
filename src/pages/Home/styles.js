import styled from "styled-components";
import HomeBackground from "../../assets/homeBackground.svg";

export const Container = styled.main`
  background-image: url(${HomeBackground});
  background-repeat: no-repeat;
  background-size: cover;

  min-height: 100vh;

  section:first-child {
    padding: 40px 0 40px 35px;
  }

  footer {
    padding-bottom: 30px;
  }

  @media screen and (min-width: 768px) {
    section:first-child {
      padding-left: 110px;
    }
  }
`;

export const Greeting = styled.p`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
    height: 36px;

    font-size: 14px;
    line-height: 36px;

    position: absolute;
    top: 40px;
    right: 14%;
  }

  @media screen and (min-width: 1360px) {
    right: 16%;
  }
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

  @media screen and (min-width: 768px) {
    width: 36px;
    height: 36px;

    top: 40px;
    right: 8%;
  }

  @media screen and (min-width: 1360px) {
    right: 10%;
  }
`;

export const Content = styled.section`
  padding-bottom: 45px;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  grid-gap: 15px 0;

  @media screen and (min-width: 768px) {
    grid-template-columns: 272px 272px;
    grid-gap: 15px;
    justify-content: center;

    padding-top: 45px;
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: 272px 272px 272px;
  }

  @media screen and (min-width: 1280px) {
    grid-template-columns: 272px 272px 272px 272px;
  }
`;
