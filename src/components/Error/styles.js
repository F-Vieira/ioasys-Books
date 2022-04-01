import styled from "styled-components";

export const Container = styled.div`
  width: 239px;
  height: 48px;
  border-radius: 4px;

  background-color: var(--transparent_white);
  color: var(--white);
  font-weight: bold;

  line-height: 48px;
  text-align: center;

  margin-top: 25px;

  position: absolute;

  &::before {
    content: "";
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid var(--transparent_white);

    position: absolute;
    top: -10px;
    left: 10px;
  }
`;
