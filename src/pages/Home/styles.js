import styled from "styled-components";

export const Container = styled.main`
  section:first-child {
    margin: 40px 0 40px 35px;
  }
`;

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
