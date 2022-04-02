import styled from "styled-components";

export const Container = styled.div`
  width: 288px;
  height: 60px;

  padding: 7px 12px;

  background-color: var(--transparent_black);
  border-radius: 4px;

  position: relative;

  @media screen and (min-width: 768px) {
    width: 368px;
  }
`;

export const Label = styled.label`
  color: var(--white);
  opacity: 0.5;
  font-size: 12px;
`;

export const Input = styled.input`
  background-color: inherit;
  color: var(--white);
  height: 24px;
  font-size: 16px;
`;

export const Button = styled.button`
  width: 85px;
  height: 36px;
  border-radius: 44px;

  position: absolute;
  top: calc(50% - 30%);
  right: 16px;

  color: var(--pink);

  font-weight: 600;
`;
