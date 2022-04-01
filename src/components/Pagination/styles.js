import styled from "styled-components";

export const Container = styled.footer`
  width: 190px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;

  color: var(--gray);

  div {
    width: 32px;
    height: 32px;
    border: 1px solid #333333;
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;

    svg {
      font-size: 12px;
    }
  }

  span {
    font-size: 12px;
    line-height: 32px;
  }
`;
