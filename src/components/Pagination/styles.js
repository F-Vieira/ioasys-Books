import styled from "styled-components";

export const Container = styled.footer`
  width: 190px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;

  color: var(--gray);

  .prev_page {
    color: ${({ disablePrev }) => disablePrev && "#33333333"};
  }
  .next_page {
    color: ${({ disableNext }) => disableNext && "#33333333"};
  }

  span {
    font-size: 12px;
    line-height: 32px;
  }

  @media screen and (min-width: 1024px) {
    margin-right: 8%;
  }

  @media screen and (min-width: 1360px) {
    margin-right: 10%;
  }
`;

export const NextPrev = styled.div`
  width: 32px;
  height: 32px;
  border: 1px solid #33333333;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  svg {
    font-size: 12px;
  }
`;
